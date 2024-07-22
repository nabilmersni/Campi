import LinkBtn from 'src/ui/LinkBtn';

function EventItemCard({ img }) {
  return (
    <div className="bg-white-light flex min-h-[20rem] flex-col items-center rounded-[3rem] border-[.2rem] border-primary p-3 sm:min-w-[23rem]">
      <div className="mb-2 h-[10rem] w-full rounded-[2rem]">
        <img
          src={img}
          alt="camp-img"
          className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-cover"
        />
      </div>
      <h2 className="mb-4 text-xl font-bold text-primary">
        Camping on Testour
      </h2>

      <div className="mb-6 flex items-center justify-center gap-5">
        <div className="flex flex-1 items-center justify-center gap-2">
          <img src="/img/locationIcon.svg" alt="locationIcon" className="w-5" />
          <span className="text-sm font-bold text-primary">Tunis, Béja</span>
        </div>
        <div className="size-2 rounded-full bg-primary"></div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <img src="/img/dateIcon.svg" alt="locationIcon" className="w-5" />
          <span className="w-fit whitespace-nowrap text-sm font-bold text-primary">
            1 Fev - 5 Fev
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-3">
        <LinkBtn type={'primaryLight'}>more info</LinkBtn>
        <div className="size-[.3rem] rounded-full bg-primary sm:block"></div>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <img
            src="/img/peopleIcon.svg"
            alt="peopleIcon"
            className="hidden w-16 xsm:block sm:w-20"
          />
          <LinkBtn type={'primaryLight'}>Join</LinkBtn>
        </div>
      </div>
    </div>
  );
}

export default EventItemCard;
