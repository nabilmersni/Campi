import CartChekout from 'src/features/cart/CartChekout';
import CartLayout from 'src/features/cart/CartLayout';
import CartList from 'src/features/cart/CartList';
import Separator from 'src/ui/Separator';

function CartDetailPage() {
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

            <span className="text-lg font-bold text-primary">3 Items</span>
          </div>
          <Separator size="xl" />

          <CartList />
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
