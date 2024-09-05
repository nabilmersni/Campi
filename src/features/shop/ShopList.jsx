import LinkBtn from 'src/ui/LinkBtn';
import ShopItemCard from './ShopItemCard';
import InputField from 'src/ui/InputField';
import Separator from 'src/ui/Separator';
import { useQuery } from '@tanstack/react-query';
import shopService from 'src/services/ShopService';
import Loader from 'src/ui/Loader';

function ShopList({ type }) {
  const {
    isPending,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: shopService.getAllProducts,
  });

  if (type === 'landingPage') {
    return (
      <div className="relative mt-4 flex w-full flex-col items-center justify-center rounded-[1.5rem] border-[.15rem] border-primary p-7 pt-16 sm:mt-9 sm:rounded-[3rem] sm:pt-32 md:mt-12 lg:mt-20">
        <div className="mb-7 flex flex-wrap items-center justify-center gap-4 gap-y-10 sm:mb-16 lg:gap-x-20">
          <ShopItemCard img={'/img/tent.png'} />
          <ShopItemCard img={'/img/backpack.png'} />
          <ShopItemCard img={'/img/sleepBag.png'} />
          <ShopItemCard img={'/img/tent.png'} />
          <ShopItemCard img={'/img/backpack.png'} />
          <ShopItemCard img={'/img/sleepBag.png'} />
        </div>

        <LinkBtn type={'primary'} size={2}>
          View all
        </LinkBtn>
      </div>
    );
  }

  if (type === 'dash') {
    return (
      <>
        {isPending && <Loader />}

        <div className="flex h-full w-full min-w-[21rem] flex-wrap justify-center gap-4 gap-y-8 sm:justify-start">
          {products?.map((product) => (
            <ShopItemCard key={product.id} type="dash" item={product} />
          ))}
        </div>
      </>
    );
  }

  if (type === 'userside') {
    return (
      <div className="flex flex-col items-center text-black-light">
        {isPending && <Loader />}
        <div className="flex w-full flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <h2 className="text-lg font-semibold">Event list</h2>
          <div className="flex items-center gap-4 self-end">
            <p>Sort by:</p>
            <InputField color="primary" isSelect={true} />
          </div>
        </div>
        <Separator size="big" />
        <div className="mt-9 flex w-full flex-wrap justify-center gap-7 sm:justify-start">
          {products?.map((product) => (
            <ShopItemCard key={product.id} type="userside" item={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopList;
