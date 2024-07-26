import Title from 'src/ui/Title';
import LinkBtn from 'src/ui/LinkBtn';
import ShopItemCard from '../shop/ShopItemCard';

function ShopSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative">
        <Title>Shop</Title>
        <p className="mx-auto max-w-[36rem] text-center text-lg text-black-light">
          Explore our top-quality camping gear made from sustainable materials,
          perfect for enhancing your outdoor adventures.
        </p>
        <div className="mx-auto my-5 h-1 w-20 rounded-full bg-primary opacity-50"></div>

        <div className="top-100 absolute left-0 right-0 mx-auto mt-4 min-h-[40rem] w-full rounded-[2rem] p-7 pt-32 sm:mt-9 sm:rounded-[3rem] md:mt-12 lg:mt-20">
          <div className="absolute left-0 right-0 top-[-2.5%] z-10 mx-auto w-fit sm:top-[-4%] md:top-[-5%] lg:top-[-5%]">
            <img
              src="/img/shopFace.svg"
              alt="shopFace"
              className="w-[18rem] sm:w-[30rem] md:w-[40rem] lg:w-[55rem]"
            />
          </div>
        </div>
      </div>

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
    </section>
  );
}

export default ShopSection;
