import Separator from 'src/ui/Separator';
import EventItemCard from './EventItemCard';
import InputField from 'src/ui/InputField';

function EventList({ type }) {
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
