import Separator from 'src/ui/Separator';
import EventItemCard from './EventItemCard';
import InputField from 'src/ui/InputField';

function EventList({ type }) {
  if (type === 'landingPage') {
    return (
      <div className="mb-12 mt-16 flex flex-wrap items-center justify-center gap-4 gap-y-10 sm:mb-16 lg:gap-x-24">
        <EventItemCard type="landingPage" img={'/img/camp1.jpg'} />
        <EventItemCard type="landingPage" img={'/img/camp2.jpg'} />
        <EventItemCard type="landingPage" img={'/img/camp3.jpg'} />
        <EventItemCard type="landingPage" img={'/img/camp1.jpg'} />
        <EventItemCard type="landingPage" img={'/img/camp2.jpg'} />
        <EventItemCard type="landingPage" img={'/img/camp3.jpg'} />
      </div>
    );
  }

  if (type === 'dash') {
    return (
      <div className="flex h-full w-full min-w-[21rem] flex-wrap justify-center gap-4 gap-y-8 sm:justify-start">
        <EventItemCard type="dash" />
        <EventItemCard type="dash" />
        <EventItemCard type="dash" />
        <EventItemCard type="dash" />
        <EventItemCard type="dash" />
      </div>
    );
  }

  if (type === 'homeuserside') {
    return (
      <div className="flex max-h-[25rem] flex-col items-center gap-10 overflow-hidden">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-black-light">Latest Events</h2>
          <Separator />
        </div>
        <div className="light-scrollbar flex h-full w-full flex-col items-center gap-5 overflow-y-auto pr-3">
          <EventItemCard type="homeuserside" />
          <EventItemCard type="homeuserside" />
          <EventItemCard type="homeuserside" />
        </div>
      </div>
    );
  }

  if (type === 'eventsuserside') {
    return (
      <div className="flex flex-col items-center text-black-light">
        <div className="flex w-full flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <h2 className="text-lg font-semibold">Event list</h2>
          <div className="flex items-center gap-4 self-end">
            <p>Sort by:</p>
            <InputField color="primary" isSelect={true} />
          </div>
        </div>
        <Separator size="big" />

        <div className="mt-9 flex w-full flex-col gap-7">
          <EventItemCard type="eventuserside" />
          <EventItemCard type="eventuserside" />
          <EventItemCard type="eventuserside" />
        </div>
      </div>
    );
  }
}

export default EventList;
