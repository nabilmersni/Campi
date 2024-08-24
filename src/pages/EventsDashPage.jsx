import EventItemCard from 'src/features/events/EventItemCard';
import EventList from 'src/features/events/EventList';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function EventsDashPage() {
  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      <TitleDash title={'Events list'} animation={'events'}>
        <InputField size="small" label={'Search Events'} />
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <EventList type={'dash'} />
      </div>
    </div>
  );
}

export default EventsDashPage;
