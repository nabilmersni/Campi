import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStage } from './CartSlice';

function CartLayout({ children }) {
  const { stage } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStage('cart'));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4 text-black-light">
      <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
        <span
          className={`font-bold ${stage === 'cart' ? 'text-primary' : 'text-[#BEB3EB]'} sm:text-lg`}
        >
          Cart
        </span>
        <div className="h-[0.2rem] w-[6rem] bg-[#E2DBFF]"></div>
        <span
          className={`font-bold ${stage === 'address' ? 'text-primary' : 'text-[#BEB3EB]'} sm:text-lg`}
        >
          Address
        </span>
        <div className="h-[0.2rem] w-[6rem] bg-[#E2DBFF]"></div>
        <span
          className={`font-bold ${stage === 'payment' ? 'text-primary' : 'text-[#BEB3EB]'} sm:text-lg`}
        >
          Payment
        </span>
      </div>

      <div className="flex flex-shrink-0 flex-col gap-6 lg:flex-row">
        <div className="flex min-h-[30rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white bg-[url('/img/Cartpattern.svg')] bg-center bg-repeat p-4">
          {children?.[0]}
        </div>

        <div className="bg flex max-h-[31rem] w-full flex-shrink-0 flex-col rounded-[1rem] border-[3px] border-b-[0.7rem] border-t-[0.7rem] border-border-light bg-border-light lg:w-[22rem]">
          <div className="flex h-full w-full flex-col rounded-[0.5rem] border-[3px] border-border-light bg-white p-4">
            {children?.[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartLayout;
