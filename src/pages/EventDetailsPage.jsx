import { useLoaderData } from 'react-router-dom';
import EventBooking from 'src/features/events/EventBooking';
import EventDetails from 'src/features/events/EventDetails';
import ItemDetailLayout from 'src/features/userSide/ItemDetailLayout';
import eventService from 'src/services/EventService';

function EventDetailsPage() {
  const event = useLoaderData();
  return (
    <div className="relative w-full overflow-hidden bg-bg-light">
      <ItemDetailLayout>
        <EventDetails event={event} />

        {/*  */}
        <EventBooking />
      </ItemDetailLayout>
    </div>
  );
}

export const loader = ({ params }) => {
  const event = eventService.getEventDetails(params.id);
  return event;
};

export default EventDetailsPage;
