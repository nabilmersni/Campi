import CartLayout from 'src/features/cart/CartLayout';
import NumberInput from 'src/ui/NumberInput';
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

          {/* cart items table */}
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
              {/* Row */}
              <div className="col-span-4 grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center gap-4 rounded-[1rem] border-[3px] border-border-light p-3 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex size-[9rem] flex-shrink-0 items-center justify-center rounded-[1rem] bg-bg-light">
                    <img
                      src="/img/tent.png"
                      alt="product img"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h1
                      className="line-clamp-2 font-bold"
                      title="REI Camping Backpack"
                    >
                      REI Camping Backpack
                    </h1>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-border-light">
                        Color - <span className="text-black-light">Red</span>
                      </p>
                      <p className="text-sm font-bold text-border-light">
                        Size - <span className="text-black-light">XL</span>
                      </p>
                    </div>
                  </div>
                </div>
                <span>$10.00</span>
                <NumberInput
                  aria-label="Demo number input"
                  placeholder="Type a number…"
                  value={2}
                  // onChange={(event, val) => setValue(val)}
                />
                <span className="truncate">$20.00</span>
              </div>
              {/* Row */}

              {/* Row */}
              <div className="col-span-4 grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center gap-4 rounded-[1rem] border-[3px] border-border-light p-3 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex size-[9rem] flex-shrink-0 items-center justify-center rounded-[1rem] bg-bg-light">
                    <img
                      src="/img/tent.png"
                      alt="product img"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h1
                      className="line-clamp-2 font-bold"
                      title="REI Camping Backpack"
                    >
                      REI Camping Backpack
                    </h1>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-border-light">
                        Color - <span className="text-black-light">Red</span>
                      </p>
                      <p className="text-sm font-bold text-border-light">
                        Size - <span className="text-black-light">XL</span>
                      </p>
                    </div>
                  </div>
                </div>
                <span>$10.00</span>
                <NumberInput
                  aria-label="Demo number input"
                  placeholder="Type a number…"
                  value={2}
                  // onChange={(event, val) => setValue(val)}
                />
                <span className="truncate">$20.00</span>
              </div>
              {/* Row */}

              {/* Row */}
              <div className="col-span-4 grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center gap-4 rounded-[1rem] border-[3px] border-border-light p-3 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex size-[9rem] flex-shrink-0 items-center justify-center rounded-[1rem] bg-bg-light">
                    <img
                      src="/img/tent.png"
                      alt="product img"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h1
                      className="line-clamp-2 font-bold"
                      title="REI Camping Backpack"
                    >
                      REI Camping Backpack
                    </h1>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-border-light">
                        Color - <span className="text-black-light">Red</span>
                      </p>
                      <p className="text-sm font-bold text-border-light">
                        Size - <span className="text-black-light">XL</span>
                      </p>
                    </div>
                  </div>
                </div>
                <span>$10.00</span>
                <NumberInput
                  aria-label="Demo number input"
                  placeholder="Type a number…"
                  value={2}
                  // onChange={(event, val) => setValue(val)}
                />
                <span className="truncate">$20.00</span>
              </div>
              {/* Row */}
            </div>
          </div>
          {/* cart items table */}
        </div>
        {/* cart detail */}

        {/* checkout */}
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
              <img
                src="/img/safePayIcon.png"
                alt="safePayIcon"
                className="w-4"
              />
              <p className="text-[0.7rem] font-bold text-primary">
                Safe and Secure Payments. 100% Authentic products.
              </p>
            </div>
          </div>
        </div>
        {/* checkout */}
      </CartLayout>
    </div>
  );
}

export default CartDetailPage;
