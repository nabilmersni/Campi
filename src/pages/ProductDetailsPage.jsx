import ProductDetails from 'src/features/shop/ProductDetails';
import ProductDetailsAddCart from 'src/features/shop/ProductDetailsAddCart';
import ItemDetailLayout from 'src/features/userSide/ItemDetailLayout';

function ProductDetailsPage() {
  return (
    <div className="relative w-full overflow-hidden bg-bg-light">
      <ItemDetailLayout>
        <ProductDetails />

        {/*  */}
        <ProductDetailsAddCart />
      </ItemDetailLayout>
    </div>
  );
}

export default ProductDetailsPage;
