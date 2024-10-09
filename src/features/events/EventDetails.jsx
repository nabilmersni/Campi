import { useEffect, useState } from 'react';
import eventService from 'src/services/EventService';
import EventRules from 'src/ui/EventRules';
import GaloryCarousel from 'src/ui/GaloryCarousel';
import Loader from 'src/ui/Loader';
import ParticipantItem from 'src/ui/ParticipantItem';
import { formatDateV2 } from 'src/utils/UtilsFunctions';

function EventDetails({ event }) {
  const [isLoading, setIsLoading] = useState(false);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setIsLoading(true);
        const res = await eventService.getEventParticipants(event.id);
        setParticipants(res);
      } catch (error) {
        throw new Error(error.message);
      }
      setIsLoading(false);
    };

    fetchParticipants();
    setIsLoading(false);
  }, [event]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {isLoading && <Loader />}
      <div className="flex w-full flex-col items-center justify-between gap-1 px-4 sm:flex-row sm:px-16">
        <div className="flex items-center gap-3">
          <img src="/img/campIcon.svg" alt="campIcon" className="w-6" />
          <h2
            className="truncate text-nowrap text-[1.7rem] font-extrabold text-primary sm:max-w-[25rem]"
            title={event.title}
          >
            {event.title}
          </h2>
        </div>

        <span className="text-xl font-bold text-primary">
          Tunisia, {event.state}
        </span>
      </div>

      <div
        className={`mb-6 mt-4 h-[0.25rem] w-[95%] flex-shrink-0 rounded-full bg-bg-light`}
      ></div>

      <GaloryCarousel images={event.photoURLs} />

      <div
        className={`my-8 h-[0.35rem] w-[30%] flex-shrink-0 rounded-full bg-bg-light`}
      ></div>

      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full flex-col justify-between gap-y-4 sm:flex-row">
          <div className="flex gap-4 sm:items-center">
            <img src="/img/dateIcon.svg" alt="dateIcon" className="w-6" />
            <p className="text-lg font-extrabold text-primary">
              Camping Period:{' '}
              <span className="font-semibold text-black-light">
                From {formatDateV2(event.startDate)} To{' '}
                {formatDateV2(event.endDate)}
              </span>
            </p>
          </div>

          <div className="flex gap-4">
            <img
              src="/img/priceTagIcon.svg"
              alt="priceTagIcon"
              className="w-6"
            />
            <p className="text-lg font-bold text-primary">
              Price:{' '}
              <span className="font-semibold text-black-light">
                {event.price} TND
              </span>
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <img src="/img/locationIcon.svg" alt="locationIcon" className="w-5" />
          <p className="text-lg font-extrabold text-primary">
            Location:{' '}
            <span className="font-semibold text-black-light">
              Tunisia, {event.state}
            </span>
          </p>

          <div
            className={`h-[1.5rem] w-[0.3rem] flex-shrink-0 rounded-full bg-bg-light`}
          ></div>

          <button className="flex size-9 items-center justify-center rounded-[0.5rem] border-[2px] border-border-light p-1 transition-all hover:bg-bg-light">
            <img src="/img/mapsIcon.svg" alt="mapsIcon" className="w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-extrabold text-primary">Description</h2>
          <p className="font-semibold text-black-light">{event.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-extrabold text-primary">
            Participants ({participants?.length}/10)
          </h2>
          <div className="flex flex-wrap gap-4">
            {participants?.map((participant) => (
              <ParticipantItem
                key={participant.uid}
                participant={participant}
              />
            ))}
            {participants.length === 0 && (
              <p className="font-semibold">No participants yet</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-extrabold text-primary">Rules</h2>
          <EventRules />
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
