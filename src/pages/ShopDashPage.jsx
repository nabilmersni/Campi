import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AddProductForm from 'src/features/shop/AddProductForm';
import ShopList from 'src/features/shop/ShopList';
import shopService from 'src/services/ShopService';
import FormModal from 'src/ui/FormModal';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function ShopDashPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const {
    isPending,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: shopService.getAllProducts,
  });

  const handleToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const filterProducts = (products, searchValue) => {
    const search = searchValue.toLowerCase();

    return products?.filter(
      (product) =>
        product.title.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search),
    );
  };

  const filteredProducts = filterProducts(products, searchValue);

  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      <TitleDash title={'Products list'} animation={'shop'}>
        <div className="flex min-w-[30rem] flex-col gap-4 sm:flex-row">
          <div className="w-fit max-w-[20rem] self-center">
            <InputField
              onChange={(e) => setSearchValue(e.target.value)}
              size="small"
              label={'Search Product'}
            />
          </div>

          <button
            onClick={handleToggleModal}
            className="ignore-click-outside flex max-w-max items-center gap-2 self-center text-nowrap rounded-[0.6rem] border-[2px] border-border-light bg-[#ece8ff] px-3 py-2 font-semibold text-primary hover:bg-[#e0daff] active:bg-[#d2c9ff]"
          >
            <img src="/img/addIcon.svg" alt="addIcon" className="w-4" />
            <span>Add product</span>
          </button>
        </div>
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <ShopList
          type="dash"
          isPending={isPending}
          products={filteredProducts}
        />
        <FormModal isOpen={isOpen} handleToggleModal={handleToggleModal}>
          <AddProductForm handleToggleModal={handleToggleModal} />
        </FormModal>
      </div>
    </div>
  );
}

export default ShopDashPage;
