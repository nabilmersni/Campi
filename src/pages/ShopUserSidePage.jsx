import { useQuery } from '@tanstack/react-query';
import ShopFilter from 'src/features/shop/ShopFilter';
import ShopList from 'src/features/shop/ShopList';
import FilterListLayout from 'src/features/userSide/FilterListLayout';
import shopService from 'src/services/ShopService';

function ShopUserSidePage() {
  const { isPending, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: shopService.getAllProducts,
  });

  return (
    <div>
      <FilterListLayout>
        <ShopFilter />
        <ShopList products={products} isPending={isPending} type={'userside'} />
      </FilterListLayout>
    </div>
  );
}

export default ShopUserSidePage;
