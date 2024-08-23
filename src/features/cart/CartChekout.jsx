import Separator from 'src/ui/Separator';

function CartChekout() {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-3 text-xl font-bold">Order Summary</h2>
      <Separator size="medium" />

      <div className="mt-8 flex w-full flex-col gap-4">
        <h2 className="mb-4 font-semibold">PRICE DETAILS (3 items)</h2>
        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Total before tax (HT)</p>
          <p>360TND</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Total including tax (TTC)</p>
          <p>360TND</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Shipping fees</p>
          <p>20TND</p>
        </div>

        <div
          className={`my-4 h-[0.2rem] w-[90%] flex-shrink-0 self-center rounded-full bg-bg-light`}
        ></div>

        <div className="flex items-center justify-between text-lg font-bold">
          <p>Total Amount</p>
          <p>360TND</p>
        </div>

        <button className="my-2 w-full rounded-[0.5rem] bg-bg-light p-2 text-sm font-bold text-primary transition-all hover:bg-[#e6dfff]">
          PLACE ORDER
        </button>

        <div className="mt-2 flex items-center gap-2">
          <img src="/img/safePayIcon.png" alt="safePayIcon" className="w-4" />
          <p className="text-[0.7rem] font-bold text-primary">
            Safe and Secure Payments. 100% Authentic products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartChekout;
