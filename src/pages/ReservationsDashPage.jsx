import { useQuery } from '@tanstack/react-query';
import ReservationList from 'src/features/reservations/ReservationList';
import reservationService from 'src/services/ReservationService';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import TitleDash from 'src/ui/TitleDash';

function ReservationsDashPage() {
  const {
    isPending,
    data: reservations,
    error,
  } = useQuery({
    queryKey: ['reservations'],
    queryFn: reservationService.getAllRes,
  });

  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      {isPending && <Loader />}

      <TitleDash title={'Reservations list'} animation={'shop'}>
        <div className="flex min-w-[30rem] flex-col gap-4 sm:flex-row">
          <div className="w-fit max-w-[20rem] self-center">
            <InputField size="small" label={'Search Reservations'} />
          </div>
        </div>
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
}

export default ReservationsDashPage;
