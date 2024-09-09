import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { stripePromise } from 'src/stripe';
import CartPaymentForm from './CartPaymentForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { extractCartIdAndQuantity } from 'src/utils/UtilsFunctions';

function CartPaymentLayout() {
  const [clientSecret, setClientSecret] = useState('');
  const { currentUser } = useSelector((state) => state.auth);
  const { addressFormData, cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || !addressFormData) {
      navigate('/login');
    }

    // Fetch the clientSecret from the backend
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_CAMPI_SERVER_URL}/payment/create-cart-payment-intent`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userID: currentUser.uid,
              cartItems: extractCartIdAndQuantity(cartItems),
              currency: 'usd',
              addressFormData,
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
  }, [addressFormData, cartItems, currentUser, navigate]);

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

      <div className="w-full rounded-[1rem] border-[3px] border-border-light p-4 sm:min-w-[30rem]">
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CartPaymentForm />
          </Elements>
        ) : (
          <div>Loading payment details...</div>
        )}
      </div>
    </div>
  );
}

export default CartPaymentLayout;
