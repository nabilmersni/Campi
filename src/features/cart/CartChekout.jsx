import { useDispatch, useSelector } from 'react-redux';
import Separator from 'src/ui/Separator';
import { setStage } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CartChekout() {
  const { itemsCount, totalPrice, stage } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-3 text-xl font-bold">Order Summary</h2>
      <Separator size="medium" />

      <div className="mt-8 flex w-full flex-col gap-4">
        <h2 className="mb-4 font-semibold">
          PRICE DETAILS ({itemsCount} items)
        </h2>
        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Total before tax (HT)</p>
          <p>{totalPrice}TND</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Total including tax (TTC)</p>
          <p>{totalPrice}TND</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Shipping fees</p>
          <p>0TND</p>
        </div>

        <div
          className={`my-4 h-[0.2rem] w-[90%] flex-shrink-0 self-center rounded-full bg-bg-light`}
        ></div>

        <div className="flex items-center justify-between text-lg font-bold">
          <p>Total Amount</p>
          <p>{totalPrice}TND</p>
        </div>

        {stage === 'cart' && (
          <button
            disabled={totalPrice === 0}
            onClick={() => {
              if (!currentUser) {
                toast.warn('You must log in first to proceed!');
                navigate('/login');
              } else {
                dispatch(setStage('address'));
              }
            }}
            className={`my-2 w-full rounded-[0.5rem] p-2 text-sm font-bold transition-all ${totalPrice === 0 ? 'bg-[#f4f2ff] text-[#a79adb]' : 'bg-bg-light text-primary hover:bg-[#e6dfff]'}`}
          >
            PLACE ORDER
          </button>
        )}

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
