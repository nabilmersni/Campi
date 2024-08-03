import DashEventItemCard from 'src/features/events/DashEventItemCard';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function EventsDashPage() {
  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      <TitleDash title={'Events list'} animation={'events'}>
        <InputField size="small" label={'Search Events'} />
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <div className="flex h-full w-full min-w-[21rem] flex-wrap justify-center gap-4 gap-y-8">
          <DashEventItemCard />
          <DashEventItemCard />
          <DashEventItemCard />
          <DashEventItemCard />
          <DashEventItemCard />
        </div>
      </div>
    </div>
  );
}

export default EventsDashPage;
