import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import eventService from 'src/services/EventService';
import EventItemCard from '../events/EventItemCard';
import ReservationIcon from 'src/assets/svgs/reservationIcon.svg';

function ReservationItem({ item }) {
  const [selected, setSelected] = useState(false);
  const {
    isPending,
    data: events,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: eventService.getAllEvents,
  });
  const [boughtEvent, setBoughtEvent] = useState();

  useEffect(() => {
    if (events) {
      const temp = events.find((event) => event.id === item.eventID);
      setBoughtEvent(temp);
    }
  }, [events, item]);

  const ref = useRef(null);

  return (
    <div className="rounded-[1rem] border-[3px] border-border-light bg-white p-3">
      <header
        role="button"
        onClick={() => setSelected((prevState) => !prevState)}
        className="flex items-center justify-between p-4 font-medium"
      >
        <div className="flex w-full flex-wrap items-center gap-3 gap-y-6">
          <div className="w-10 fill-primary">
            <ReservationIcon />
          </div>
          <div className="mr-auto flex">
            <span className="mr-1 text-primary">Reservation num: </span>{' '}
            <p
              className="max-w-[5rem] truncate sm:max-w-full xsm:max-w-[25vw]"
              title={item.id}
            >
              {item.id}
            </p>
          </div>
          <div className="flex items-center gap-3 pr-0 sm:pr-4">
            {item.state ? (
              <img
                src="/img/paid.svg"
                alt="paid"
                className="w-8"
                title="paid"
              />
            ) : (
              <img
                src="/img/notPaid.svg"
                alt="notPaid"
                className="w-8"
                title="not Paid"
              />
            )}

            <p className="ml-3 font-bold text-primary">
              Total: {boughtEvent?.price}TND
            </p>
          </div>
        </div>
        <img
          src="/img/chevron.svg"
          alt="chevron"
          className={`w-5 transition-transform ${selected ? 'rotate-180' : ''}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: selected ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="flex flex-col items-center justify-center p-4 pt-2"
          ref={ref}
        >
          <div
            className={`mb-6 mt-1 h-[0.2rem] w-[97%] flex-shrink-0 rounded-full bg-bg-light`}
          ></div>

          <div className="flex flex-wrap justify-center gap-5 sm:justify-normal">
            {boughtEvent && (
              // <div className="relative flex size-[12rem] flex-col items-center justify-center gap-2 rounded-[1rem] border-[3px] border-border-light p-2">
              //   <div className="flex size-[7rem] w-full items-center justify-center rounded-[0.9rem] bg-slate-200">
              //     <img
              //       src={boughtEvent.photoURLs[0]}
              //       alt=""
              //       className="size-full rounded-[0.9rem] object-cover"
              //     />
              //   </div>

              //   <p className="max-w-[10rem] truncate font-semibold">
              //     {boughtEvent.title}
              //   </p>

              //   <div className="flex items-center justify-center truncate rounded-full text-sm font-bold text-black-light">
              //     <span>{boughtEvent.price}</span>
              //   </div>
              // </div>

              <EventItemCard item={boughtEvent} type="reservationuserside" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;
