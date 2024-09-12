import Separator from 'src/ui/Separator';
import { addCartItem } from '../cart/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useCheckCartItemAdded from 'src/hooks/useCheckCartItemAdded';

function ProductDetailsAddCart({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity: 1, total: product.price };
    dispatch(addCartItem(cartItem));
    toast.success('Item added to cart successfully!');
  };

  const isAdded = useCheckCartItemAdded(product);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h2 className="mb-3 text-xl font-bold">Product Details</h2>
      <Separator size="medium" />

      <div className="mt-8 flex w-full flex-col gap-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Category</p>
          <p>{product.category}</p>
        </div>

        {/* <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Quantity</p>
          <div className="flex w-[10rem] justify-end">
            <NumberInput />
          </div>
        </div> */}

        <div
          className={`my-4 h-[0.2rem] w-[90%] flex-shrink-0 self-center rounded-full bg-bg-light`}
        ></div>

        <div className="flex items-center justify-between text-lg font-bold">
          <p>Price</p>
          <p>{product.price}TND</p>
        </div>

        <button
          disabled={isAdded}
          onClick={handleAddToCart}
          className={`my-2 w-full rounded-[0.5rem] bg-bg-light p-2 text-sm font-bold text-primary transition-all ${isAdded ? 'bg-[#ece9ff] text-[#9d97c7]' : 'bg-primary-light text-primary hover:bg-[#d3caff]'}`}
        >
          {isAdded ? 'Already in Cart' : 'ADD TO CART'}
        </button>

        <div className="mt-5 flex items-center gap-2">
          <img src="/img/safePayIcon.png" alt="safePayIcon" className="w-4" />
          <p className="text-[0.7rem] font-bold text-primary">
            Safe and Secure Payments. 100% Authentic products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsAddCart;
