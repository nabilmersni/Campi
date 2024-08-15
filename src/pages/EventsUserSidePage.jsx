import EventFilter from 'src/features/events/EventFilter';
import EventList from 'src/features/events/EventList';
import FilterListLayout from 'src/features/userSide/FilterListLayout';

function EventsUserSidePage() {
  return (
    <div>
      <FilterListLayout>
        <EventFilter />
        <EventList type={'eventsuserside'} />
      </FilterListLayout>
    </div>
  );
}

export default EventsUserSidePage;
