import NumberInput from 'src/ui/NumberInput';
import Separator from 'src/ui/Separator';

function ProductDetailsAddCart() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <h2 className="mb-3 text-xl font-bold">Product Details</h2>
      <Separator size="medium" />

      <div className="mt-8 flex w-full flex-col gap-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Category</p>
          <p>Backpack</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Quantity</p>
          <div className="flex w-[10rem] justify-end">
            <NumberInput />
          </div>
        </div>

        <div
          className={`my-4 h-[0.2rem] w-[90%] flex-shrink-0 self-center rounded-full bg-bg-light`}
        ></div>

        <div className="flex items-center justify-between text-lg font-bold">
          <p>Total Amount</p>
          <p>360TND</p>
        </div>

        <button className="my-2 w-full rounded-[0.5rem] bg-bg-light p-2 text-sm font-bold text-primary transition-all hover:bg-[#e6dfff]">
          ADD TO CART
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
