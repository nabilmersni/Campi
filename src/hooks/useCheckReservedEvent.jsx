import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import reservationService from 'src/services/ReservationService';

function useCheckReservedEvent(item) {
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
  const isAdded = reservations?.find((res) => res.eventID === item.id);

  return isAdded ? true : false;
}

export default useCheckReservedEvent;
