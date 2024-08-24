import EventBooking from 'src/features/events/EventBooking';
import EventDetails from 'src/features/events/EventDetails';
import ItemDetailLayout from 'src/features/userSide/ItemDetailLayout';

function EventDetailsPage() {
  return (
    <div className="relative w-full overflow-hidden bg-bg-light">
      <ItemDetailLayout>
        <EventDetails />

        {/*  */}
        <EventBooking />
      </ItemDetailLayout>
    </div>
  );
}

export default EventDetailsPage;
