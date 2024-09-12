import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import ReservationList from 'src/features/reservations/ReservationList';
import reservationService from 'src/services/ReservationService';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import Separator from 'src/ui/Separator';

function ReservationsUserSidePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const {
    isPending,
    data: reservations,
    error,
  } = useQuery({
    queryKey: ['myReservations'],
    queryFn: async () => {
      const data = await reservationService.getMyRes(currentUser.uid);
      return data;
    },
  });

  return (
    <div className="flex min-h-[30rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white p-4">
      <div className="flex flex-col items-center text-black-light">
        {isPending && <Loader />}

        <div className="flex w-full flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <h2 className="text-lg font-semibold">Your reservations</h2>
          <div className="flex items-center gap-4 self-end">
            <p>Sort by:</p>
            <InputField color="primary" isSelect={true} />
          </div>
        </div>
        <Separator size="big" />

        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
}

export default ReservationsUserSidePage;
