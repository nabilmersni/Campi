import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderList from 'src/features/orders/OrderList';
import orderService from 'src/services/OrderService';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import Separator from 'src/ui/Separator';

function OrdersUserSidePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const [orders, setOders] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchMyOders = async () => {
      setIsPending(true);
      try {
        const data = await orderService.getMyOrders(currentUser.uid);
        setOders(data);
      } catch (error) {
        throw new Error(error.message);
      }
      setIsPending(false);
    };

    fetchMyOders();
  }, [currentUser]);

  return (
    <div className="flex min-h-[30rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white p-4">
      <div className="flex flex-col items-center text-black-light">
        {isPending && <Loader />}

        <div className="flex w-full flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <h2 className="text-lg font-semibold">Your orders</h2>
          <div className="flex items-center gap-4 self-end">
            <p>Sort by:</p>
            <InputField color="primary" isSelect={true} />
          </div>
        </div>
        <Separator size="big" />

        <OrderList orders={orders} />
      </div>
    </div>
  );
}

export default OrdersUserSidePage;
