import { useContext, useEffect } from 'react';
import { DashboardContext } from 'src/context/DashboardContext';
import LinkBtn from 'src/ui/LinkBtn';
import SidebarCollapseIcon from 'src/assets/svgs/sidebarCollapseIcon.svg';

function Sidebar() {
  const { isSidebarCollapsed, setIsSidebarCollapsed } =
    useContext(DashboardContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && isSidebarCollapsed === false) {
        setIsSidebarCollapsed(true);
      }

      if (window.innerWidth >= 1024 && isSidebarCollapsed === true) {
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
      className={`relative flex ${isSidebarCollapsed ? 'w-[6rem]' : 'w-[20rem]'} flex-col items-center px-2 py-8 transition-all`}
    >
      <img
        src="/img/logoW.svg"
        alt=""
        className={`mb-[10rem] transition-all`}
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
        className={`absolute right-[-2.2rem] top-[1.4rem] w-[2rem] cursor-pointer fill-primary-light ${isSidebarCollapsed ? 'rotate-180' : ''} `}
      >
        <SidebarCollapseIcon />
      </div>
    </div>
  );
}

export default Sidebar;
