import EventRules from 'src/ui/EventRules';
import GaloryCarousel from 'src/ui/GaloryCarousel';
import ParticipantItem from 'src/ui/ParticipantItem';

function EventItemDetails() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-col items-center justify-between gap-1 px-4 sm:flex-row sm:px-16">
        <div className="flex items-center gap-3">
          <img src="/img/campIcon.svg" alt="campIcon" className="w-6" />
          <h2 className="truncate text-nowrap text-[1.7rem] font-extrabold text-primary sm:max-w-[25rem]">
            Camping Testour
          </h2>
        </div>

        <span className="text-xl font-bold text-primary">Tunisia, Beja</span>
      </div>

      <div
        className={`mb-6 mt-4 h-[0.25rem] w-[95%] flex-shrink-0 rounded-full bg-bg-light`}
      ></div>

      <GaloryCarousel />

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
                From 15/08/2024 To 19/08/2024
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
              <span className="font-semibold text-black-light">20 TND</span>
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <img src="/img/locationIcon.svg" alt="locationIcon" className="w-5" />
          <p className="text-lg font-extrabold text-primary">
            Location:{' '}
            <span className="font-semibold text-black-light">
              Tunisia, Beja
            </span>
          </p>

          <div
            className={`h-[1.5rem] w-[0.3rem] flex-shrink-0 rounded-full bg-bg-light`}
          ></div>

          <button className="flex size-9 items-center justify-center rounded-[0.5rem] border-[2px] border-border-light p-1 transition-all hover:bg-bg-light">
            <img src="/img/mapsIcon.svg" alt="mapsIcon" className="w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-extrabold text-primary">Description</h2>
          <p className="font-semibold text-black-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it. Lorem Ipsum has been the standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it. Lorem Ipsum has been the standard dummy text ever
            since the 1500s.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-extrabold text-primary">
            Participants (5/10)
          </h2>
          <div className="flex flex-wrap gap-4">
            <ParticipantItem />
            <ParticipantItem />
            <ParticipantItem />
            <ParticipantItem />
            <ParticipantItem />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-extrabold text-primary">Rules</h2>
          <EventRules />
        </div>
      </div>
    </div>
  );
}

export default EventItemDetails;
