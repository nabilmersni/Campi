import { useLoaderData } from 'react-router-dom';
import ProductDetails from 'src/features/shop/ProductDetails';
import ProductDetailsAddCart from 'src/features/shop/ProductDetailsAddCart';
import ItemDetailLayout from 'src/features/userSide/ItemDetailLayout';
import shopService from 'src/services/ShopService';

function ProductDetailsPage() {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="relative w-full overflow-hidden bg-bg-light">
      <ItemDetailLayout>
        <ProductDetails product={product} />

        <ProductDetailsAddCart product={product} />
      </ItemDetailLayout>
    </div>
  );
}

export const loader = ({ params }) => {
  const product = shopService.getProductDetails(params.id);
  return product;
};

export default ProductDetailsPage;
