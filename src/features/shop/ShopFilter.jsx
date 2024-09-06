import FilterTag from 'src/ui/FilterTag';
import MultiRangeSlider from 'src/ui/MultiRangeSlider';
import Separator from 'src/ui/Separator';
import CategoriesInput from 'src/ui/CategoriesInput';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { reset, setFiltredProducts } from './ShopSlice';

function ShopFilter() {
  const { filtredProducts, categories, priceRange } = useSelector(
    (state) => state.shop,
  );
  const { data: products } = useQuery({ queryKey: ['products'] });
  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    dispatch(
      setFiltredProducts(
        products.filter((product) => {
          const categoriesFilter =
            categories.length === 0
              ? true
              : categories.includes(product.category);

          const priceRangeFilter =
            priceRange[0] <= product.price && priceRange[1] >= product.price;

          return categoriesFilter && priceRangeFilter;
        }),
      ),
    );
  };

  const handleClearFilter = () => {
    dispatch(reset());
    dispatch(setFiltredProducts(products));
  };

  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-hidden text-black-light">
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold">{filtredProducts?.length || 0} results</p>
        <button
          onClick={handleClearFilter}
          className="rounded-full border-[2px] border-border-light px-4 py-1 transition-all hover:bg-bg-light"
        >
          clear filters
        </button>
      </div>

      {categories.length > 0 && (
        <div className="flex w-full flex-wrap gap-3">
          {categories.map((category) => (
            <FilterTag key={category} data={category} />
          ))}
        </div>
      )}

      <Separator size="medium" />

      <div className="flex h-full min-h-1 w-full flex-col gap-2">
        <p className="mb-3 font-semibold text-primary">Filter your results</p>
        <div className="flex h-full min-h-1 flex-col gap-5 overflow-y-auto pr-3">
          <div className="flex flex-col items-center">
            <p className="mb-2 self-start text-sm font-semibold">Price Range</p>
            <MultiRangeSlider />
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2 self-start text-sm font-semibold">Categories</p>
            <CategoriesInput />
          </div>
        </div>
      </div>

      <button
        onClick={handleApplyFilter}
        className="w-full rounded-[0.5rem] bg-primary-light p-2 px-4 font-bold text-primary transition-all hover:bg-[#ddd6ff]"
      >
        apply
      </button>
    </div>
  );
}

export default ShopFilter;
