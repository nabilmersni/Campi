import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Separator from 'src/ui/Separator';
import EventItemCard from './EventItemCard';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import { setFiltredEvents } from './EventSlice';
import eventService from 'src/services/EventService';
import { useQuery } from '@tanstack/react-query';

function EventList({ type, isPending, events }) {
  const { filtredEvents } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const { isPending: isPending2, data: events2 } = useQuery({
    queryKey: ['events'],
    queryFn: eventService.getAllEvents,
  });

  useEffect(() => {
    dispatch(setFiltredEvents(events2));
  }, [events2, dispatch]);

  if (type === 'landingPage') {
    return (
      <div className="mb-12 mt-16 flex flex-wrap items-center justify-center gap-4 gap-y-10 sm:mb-16 lg:gap-x-24">
        {events2?.slice(0, 6)?.map((event) => (
          <EventItemCard key={event.id} item={event} type="landingPage" />
        ))}
      </div>
    );
  }

  if (type === 'dash') {
    return (
      <>
        {isPending && <Loader />}

        <div className="flex h-full w-full min-w-[21rem] flex-wrap justify-center gap-4 gap-y-8 sm:justify-start">
          {events?.map((event) => (
            <EventItemCard key={event.id} item={event} type="dash" />
          ))}
        </div>
      </>
    );
  }

  if (type === 'homeuserside') {
    return (
      <div className="flex max-h-[25rem] flex-col items-center gap-10 overflow-hidden">
        {isPending && <Loader />}

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-black-light">Latest Events</h2>
          <Separator />
        </div>
        <div className="light-scrollbar flex h-full w-full flex-col items-center gap-5 overflow-y-auto pr-3">
          {events2?.slice(0, 3)?.map((event) => (
            <EventItemCard key={event.id} item={event} type="homeuserside" />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'eventsuserside') {
    return (
      <div className="flex flex-col items-center text-black-light">
        {isPending2 && <Loader />}

        <div className="flex w-full flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <h2 className="text-lg font-semibold">Event list</h2>
          <div className="flex items-center gap-4 self-end">
            <p>Sort by:</p>
            <InputField color="primary" isSelect={true} />
          </div>
        </div>
        <Separator size="big" />

        <div className="mt-9 flex w-full flex-col gap-7">
          {filtredEvents?.map((event) => (
            <EventItemCard key={event.id} item={event} type="eventuserside" />
          ))}
        </div>
      </div>
    );
  }
}

export default EventList;
