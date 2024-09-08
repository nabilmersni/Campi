import CartProductItem from './CartProductItem';

function CartList({ cartItems }) {
  return (
    <div className="mt-12 w-full">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 border-b-2 border-bg-light p-3 pr-12 shadow-sm">
        <div className="col-span-4 grid grid-cols-[2.5fr_1fr_1fr_1fr] gap-4">
          <span className="font-semibold">Product details</span>
          <span className="font-semibold">Price</span>
          <span className="font-semibold">Quantity</span>
          <span className="font-semibold">Total</span>
        </div>
      </div>

      {/* Table Body */}
      <div className="light-scrollbar mt-4 grid max-h-[30rem] grid-cols-4 gap-4 overflow-y-auto pr-5">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartProductItem key={item.id} item={item} />)
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default CartList;
