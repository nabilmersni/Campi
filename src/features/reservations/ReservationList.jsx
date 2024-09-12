import ReservationItem from './ReservationItem';

function ReservationList({ reservations }) {
  return (
    <div className="mt-9 flex w-full flex-col gap-7">
      {reservations?.map((reservation) => (
        <ReservationItem
          key={reservation.id}
          item={reservation}
          type="eventuserside"
        />
      ))}
    </div>
  );
}

export default ReservationList;
