import { useContext, useEffect, useRef } from 'react';
import { DashboardContext } from 'src/context/DashboardContext';
import LinkBtn from 'src/ui/LinkBtn';
import SidebarCollapseIcon from 'src/assets/svgs/sidebarCollapseIcon.svg';

function Sidebar() {
  const { isSidebarCollapsed, setIsSidebarCollapsed } =
    useContext(DashboardContext);
  const previousWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (previousWidth.current !== currentWidth) {
        if (currentWidth < 1024) {
          setIsSidebarCollapsed(true);
        } else {
          setIsSidebarCollapsed(false);
        }
      }
      previousWidth.current = currentWidth;
    };

    window.addEventListener('resize', handleResize);

    if (window.innerWidth < 1024) {
      setIsSidebarCollapsed(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSidebarCollapsed]);

  return (
    <div
      className={`relative flex h-full ${isSidebarCollapsed ? 'w-[4rem]' : 'w-[17rem]'} flex-col items-center px-2 py-4 transition-all`}
    >
      <img
        src="/img/logoW.svg"
        alt=""
        className={`mb-[8rem] transition-all ${isSidebarCollapsed ? 'w-9' : 'w-12'}`}
      />

      <ul className="flex w-full flex-col items-center justify-center gap-3">
        <LinkBtn to={'/dashboard'} type={'sidebarNavLink'} sidebarIcon="dash">
          Dashboard
        </LinkBtn>

        <LinkBtn
          to={'/dashboard/users'}
          type={'sidebarNavLink'}
          sidebarIcon="users"
        >
          Users
        </LinkBtn>

        <LinkBtn
          to={'/dashboard/events'}
          type={'sidebarNavLink'}
          sidebarIcon="events"
        >
          Events
        </LinkBtn>

        <LinkBtn
          to={'/dashboard/shop'}
          type={'sidebarNavLink'}
          sidebarIcon="shop"
        >
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
