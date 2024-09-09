import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import orderService from 'src/services/OrderService';
import { resetCart } from './CartSlice';

function CartPaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      console.log(error.message);
    } else if (paymentIntent) {
      // Additional logic upon successful payment
      console.log('Payment successful', paymentIntent);

      try {
        await orderService.confirmOrder(paymentIntent.id);
        toast.success('Payment successful! Your order has been created');
        dispatch(resetCart());
        navigate('/userside');
      } catch (error) {
        console.log(error.message);
      }
      // const products = JSON.parse(paymentIntent.metadata.products);

      // console.log(products);
      // Example: Redirect to a confirmation page

      // Example: Update application state or notify the user
      // dispatch(updateOrderStatus(paymentIntent.id));
      // setSuccessMessage('Payment was successful!');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full rounded-[1rem] p-3 sm:min-w-[30rem]">
        <PaymentElement />

        <button
          type="submit"
          disabled={!stripe || loading}
          className="mt-6 rounded-md bg-primary px-4 py-2 font-semibold text-white disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
      {/* {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>} */}
    </form>
  );
}

export default CartPaymentForm;
