import NumberInput from 'src/ui/NumberInput';

function CartProductItem({ item }) {
  return (
    <div className="col-span-4 grid grid-cols-[2.5fr_1fr_1fr_1fr] items-center gap-4 rounded-[1rem] border-[3px] border-border-light p-3 shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex size-[9rem] flex-shrink-0 items-center justify-center rounded-[1rem] bg-bg-light">
          <img
            src={item.photoURLs[0] || '/img/tent.png'}
            alt="product img"
            className="h-full w-full object-contain p-3"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="line-clamp-2 font-bold" title="REI Camping Backpack">
            {item.title}
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
      <span>${item.price}</span>
      <NumberInput
        aria-label="Demo number input"
        placeholder="Type a number…"
        item={item}
        // value={2}
        // onChange={(event, val) => setValue(val)}
      />
      <span className="truncate">${item.total}</span>
    </div>
  );
}

export default CartProductItem;
