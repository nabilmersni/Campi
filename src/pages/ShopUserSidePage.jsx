import ShopFilter from 'src/features/shop/ShopFilter';
import ShopList from 'src/features/shop/ShopList';
import FilterListLayout from 'src/features/userSide/FilterListLayout';

function ShopUserSidePage() {
  return (
    <div>
      <FilterListLayout>
        <ShopFilter />
        <ShopList type={'userside'} />
      </FilterListLayout>
    </div>
  );
}

export default ShopUserSidePage;
