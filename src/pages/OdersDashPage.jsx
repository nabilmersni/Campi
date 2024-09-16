import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import OrderList from 'src/features/orders/OrderList';
import orderService from 'src/services/OrderService';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import TitleDash from 'src/ui/TitleDash';

function OdersDashPage() {
  const [searchValue, setSearchValue] = useState('');

  const {
    isPending,
    data: orders,
    error,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: orderService.getAllOrders,
  });

  const filterOrders = (orders, searchValue) => {
    const search = searchValue.toLowerCase();

    return orders?.filter((res) => res.id.toLowerCase().includes(search));
  };

  const filteredOrders = filterOrders(orders, searchValue);

  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      {isPending && <Loader />}

      <TitleDash title={'Orders list'} animation={'shop'}>
        <div className="flex min-w-[30rem] flex-col gap-4 sm:flex-row">
          <div className="w-fit max-w-[20rem] self-center">
            <InputField
              onChange={(e) => setSearchValue(e.target.value)}
              size="small"
              label={'Search Oders'}
            />
          </div>
        </div>
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <OrderList orders={filteredOrders} />
      </div>
    </div>
  );
}

export default OdersDashPage;
