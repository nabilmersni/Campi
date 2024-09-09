import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decCartItemQuantity,
  deleteCartItem,
  incCartItemQuantity,
} from 'src/features/cart/CartSlice';

function NumberInput({ item }) {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const handleOnchange = (type) => {
    if (type === 'inc') {
      setValue((value) => value + 1);
      dispatch(incCartItemQuantity(item));
    } else if (type === 'dec') {
      setValue((value) => {
        const newValue = value - 1;
        if (newValue < 0) {
          dispatch(deleteCartItem(item));
        } else {
          dispatch(decCartItemQuantity(item));
        }
        return newValue;
      });
    }
  };

  return (
    <div
      className="max-w-[80%] rounded-lg border-[2px] border-border-light px-3 py-2"
      data-hs-input-number=""
    >
      <div className="flex w-full items-center justify-between gap-x-5">
        <div className="grow">
          <input
            className="w-full rounded-md border-0 bg-transparent p-1 text-black-light outline-none ring-primary focus:ring-1 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            aria-roledescription="Number field"
            value={item.quantity}
            onChange={() => {}}
          />
        </div>
        <div className="flex items-center justify-end gap-x-1.5">
          <button
            type="button"
            className="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            aria-label="Decrease"
            data-hs-input-number-decrement=""
            onClick={() => handleOnchange('dec')}
          >
            <svg
              className="size-3.5 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            aria-label="Increase"
            onClick={() => handleOnchange('inc')}
          >
            <svg
              className="size-3.5 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberInput;
