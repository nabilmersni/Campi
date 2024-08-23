import EventItemDetails from 'src/features/events/EventItemDetails';
import ItemDetailLayout from 'src/features/userSide/ItemDetailLayout';

function EventDetailsPage() {
  return (
    <div className="relative w-full overflow-hidden bg-bg-light">
      <ItemDetailLayout>
        <EventItemDetails />

        {/*  */}
        <div>hello</div>
      </ItemDetailLayout>
    </div>
  );
}

export default EventDetailsPage;
