import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import reservationService from 'src/services/ReservationService';

function EventPaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      try {
        await reservationService.confirmRes(paymentIntent.id);
        toast.success('Payment successful! Your reservation has been placed.');
        navigate('/userside/reservations');
      } catch (error) {
        console.log(error.message);
      }
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

export default EventPaymentForm;
