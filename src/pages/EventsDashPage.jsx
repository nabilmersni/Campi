import { useState } from 'react';
import AddEventForm from 'src/features/events/AddEventForm';
import EventList from 'src/features/events/EventList';
import FormModal from 'src/ui/FormModal';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function EventsDashPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      <TitleDash title={'Events list'} animation={'events'}>
        <div className="flex min-w-[30rem] flex-col gap-4 sm:flex-row">
          <div className="w-fit max-w-[20rem] self-center">
            <InputField size="small" label={'Search Events'} />
          </div>

          <button
            onClick={handleToggleModal}
            className="ignore-click-outside flex max-w-max items-center gap-2 self-center text-nowrap rounded-[0.6rem] border-[2px] border-border-light bg-[#ece8ff] px-3 py-2 font-semibold text-primary hover:bg-[#e0daff] active:bg-[#d2c9ff]"
          >
            <img src="/img/addIcon.svg" alt="addIcon" className="w-4" />
            <span>Add event</span>
          </button>
        </div>
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <EventList type={'dash'} />

        <FormModal isOpen={isOpen} handleToggleModal={handleToggleModal}>
          <AddEventForm handleToggleModal={handleToggleModal} />
        </FormModal>
      </div>
    </div>
  );
}

export default EventsDashPage;
