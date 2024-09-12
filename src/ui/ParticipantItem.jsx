import FbIcon from 'src/assets/svgs/fbIcon.svg';
import InstaIcon from 'src/assets/svgs/instaIcon.svg';
import TwitterIcon from 'src/assets/svgs/twitterIcon.svg';

function ParticipantItem({ participant }) {
  return (
    <div className="flex w-full items-center gap-10 rounded-[0.5rem] border-[3px] border-border-light bg-bg-light p-2 sm:w-fit sm:gap-4">
      <div className="size-14 flex-shrink-0">
        <img
          className="h-full w-full rounded-full border-[3px] border-border-light bg-bg-light object-cover p-[0.2rem]"
          src={participant.photoURL || '/img/avatar2.png'}
          alt="avatar"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-[1.1rem] font-bold capitalize">
          {participant.fullname}
        </h2>

        <div className="flex gap-2">
          <button className="flex w-[1.15rem] items-center justify-center fill-[#8579bc] transition-all hover:fill-primary">
            <FbIcon />
          </button>
          <button className="flex w-[1.15rem] items-center justify-center fill-[#8579bc] transition-all hover:fill-primary">
            <InstaIcon />
          </button>
          <button className="flex w-[1.15rem] items-center justify-center fill-[#8579bc] transition-all hover:fill-primary">
            <TwitterIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParticipantItem;
