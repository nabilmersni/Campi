import AvatarDropDownMenu from 'src/ui/AvatarDropDownMenu';

import NotifIcon from 'src/assets/svgs/notifIcon.svg';
import MessengerIcon from 'src/assets/svgs/messengerIcon.svg';

function TopNavBar() {
  return (
    <div className="flex h-[4.5rem] flex-row-reverse items-center gap-4 px-8 py-2">
      {/* profile dropdown */}
      <AvatarDropDownMenu img={'/img/avatar.png'} />
      {/* profile dropdown */}

      <div className="ml-4 h-6 w-[.15rem] rounded-full bg-primary-light opacity-25"></div>

      <div className="cursor-pointer rounded-full border-[.1rem] border-primary p-3 transition-all hover:bg-[#474576]">
        <div className="w-5 fill-primary-light">
          <NotifIcon />
        </div>
      </div>

      <div className="cursor-pointer rounded-full border-[.1rem] border-primary p-3 transition-all hover:bg-[#474576]">
        <div className="w-5 fill-primary-light">
          <MessengerIcon />
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
