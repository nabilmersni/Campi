import { useSelector } from 'react-redux';
import CartAddressForm from 'src/features/cart/CartAddressForm';
import CartChekout from 'src/features/cart/CartChekout';
import CartLayout from 'src/features/cart/CartLayout';
import CartList from 'src/features/cart/CartList';
import CartPaymentLayout from 'src/features/cart/CartPaymentLayout';
import Separator from 'src/ui/Separator';

function CartDetailPage() {
  const { itemsCount, cartItems, stage } = useSelector((state) => state.cart);

  return (
    <div>
      <CartLayout>
        {/* cart detail */}
        <div className="flex flex-col items-center gap-2 pt-3">
          <div className="flex w-full items-center justify-between px-16">
            <div className="flex items-center gap-3">
              <img
                src="/img/ShopCartIcon.svg"
                alt="ShopCartIcon"
                className="w-4"
              />
              <h2 className="text-lg font-extrabold text-primary">
                Shopping Cart
              </h2>
            </div>

            <span className="text-lg font-bold text-primary">
              {itemsCount} Items
            </span>
          </div>
          <Separator size="xl" />

          {stage === 'cart' && <CartList cartItems={cartItems} />}
          {stage === 'address' && <CartAddressForm />}
          {stage === 'payment' && <CartPaymentLayout />}
        </div>
        {/* cart detail */}

        {/* checkout */}
        <CartChekout />
        {/* checkout */}
      </CartLayout>
    </div>
  );
}

export default CartDetailPage;
