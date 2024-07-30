import { useContext, useEffect } from 'react';
import { DashboardContext } from 'src/context/DashboardContext';
import LinkBtn from 'src/ui/LinkBtn';
import SidebarCollapseIcon from 'src/assets/svgs/sidebarCollapseIcon.svg';

function Sidebar() {
  const { isSidebarCollapsed, setIsSidebarCollapsed } =
    useContext(DashboardContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSidebarCollapsed]);

  return (
    <div
      className={`relative flex ${isSidebarCollapsed ? 'w-[5rem]' : 'w-[20rem]'} flex-col items-center px-2 py-4 transition-all`}
    >
      <img
        src="/img/logoW.svg"
        alt=""
        className={`mb-[8rem] transition-all ${isSidebarCollapsed ? 'w-9' : 'w-12'}`}
      />

      <ul className="flex w-full flex-col items-center justify-center gap-2">
        <LinkBtn to={'/dash'} type={'sidebarNavLink'} sidebarIcon="dash">
          Dashboard
        </LinkBtn>

        <LinkBtn to={'/dash'} type={'sidebarNavLink'} sidebarIcon="users">
          Users
        </LinkBtn>

        <LinkBtn to={'/dash'} type={'sidebarNavLink'} sidebarIcon="events">
          Events
        </LinkBtn>

        <LinkBtn to={'/dash'} type={'sidebarNavLink'} sidebarIcon="shop">
          Shop
        </LinkBtn>
      </ul>

      <div
        onClick={() => setIsSidebarCollapsed((toggle) => !toggle)}
        className={`absolute right-[-2.2rem] top-[1.4rem] hidden w-[1.7rem] cursor-pointer fill-primary-light transition-all hover:fill-[#d7cfff] sm:block ${isSidebarCollapsed ? 'rotate-180' : ''} `}
      >
        <SidebarCollapseIcon />
      </div>
    </div>
  );
}

export default Sidebar;
