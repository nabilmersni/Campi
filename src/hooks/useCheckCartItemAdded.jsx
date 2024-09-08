import { useSelector } from 'react-redux';

function useCheckCartItemAdded(item) {
  const { cartItems } = useSelector((state) => state.cart);
  const isAdded = cartItems.find((cartItem) => cartItem.id === item.id);

  return isAdded ? true : false;
}

export default useCheckCartItemAdded;
