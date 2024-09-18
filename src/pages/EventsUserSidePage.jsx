import { useQuery } from '@tanstack/react-query';
import EventFilter from 'src/features/events/EventFilter';
import EventList from 'src/features/events/EventList';
import FilterListLayout from 'src/features/userSide/FilterListLayout';
import eventService from 'src/services/EventService';

function EventsUserSidePage() {
  const {
    isPending,
    data: events,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: eventService.getAllEvents,
  });

  return (
    <div>
      <FilterListLayout>
        <EventFilter />
        <EventList
          events={events}
          isPending={isPending}
          type={'eventsuserside'}
        />
      </FilterListLayout>
    </div>
  );
}

export default EventsUserSidePage;
