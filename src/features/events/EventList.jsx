import Separator from 'src/ui/Separator';
import EventItemCard from './EventItemCard';

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
}

export default EventList;
