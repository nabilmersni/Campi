import OrderItem from './OrderItem';

function OrderList({ orders }) {
  return (
    <div className="mt-9 flex w-full flex-col gap-7">
      {orders?.map((oder) => (
        <OrderItem key={oder.id} item={oder} type="eventuserside" />
      ))}
    </div>
  );
}

export default OrderList;
