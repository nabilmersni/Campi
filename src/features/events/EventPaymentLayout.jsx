import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { stripePromise } from 'src/stripe';
import EventPaymentForm from './EventPaymentForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EventPaymentLayout({ event }) {
  const [clientSecret, setClientSecret] = useState('');
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }

    // Fetch the clientSecret from the backend
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_CAMPI_SERVER_URL}/payment/create-event-payment-intent`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userID: currentUser.uid,
              eventID: event.id,
              currency: 'usd',
            }),
          },
        );
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        // setErrorMessage('Failed to load payment details');
        console.log(error.message);
      }
    };

    fetchClientSecret();
  }, [currentUser, event, navigate]);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="mt-4 flex flex-col">
      <h1 className="mb-6 text-lg font-bold">Payment details</h1>
      <div className="max-h-[70vh] w-full overflow-auto overflow-x-hidden pr-4">
        <div className="rounded-[1rem] border-[3px] border-border-light font-nunito sm:min-w-[30rem]">
          {clientSecret ? (
            <div>
              <Elements stripe={stripePromise} options={options}>
                <EventPaymentForm />
              </Elements>
            </div>
          ) : (
            <div>Loading payment details...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPaymentLayout;
