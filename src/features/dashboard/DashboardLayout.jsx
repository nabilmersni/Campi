import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';

function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-[url('/img/dash-bg.svg')] bg-cover bg-left-top">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      <div className="flex h-screen w-full flex-col">
        {/* top nav */}
        <TopNavBar />
        {/* top nav */}

        {/* content */}
        <div
          className="mb-[1rem] mr-3 w-full flex-grow overflow-hidden rounded-[1.5rem] border-[.3rem] border-primary bg-primary-light p-4"
          // style={{ height: 'calc(100vh - 4.5rem)' }}
        >
          <Outlet />
        </div>
        {/* content */}
      </div>
    </div>
  );
}

export default DashboardLayout;
