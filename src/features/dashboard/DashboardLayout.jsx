import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[url('/img/dash-bg.svg')] bg-cover bg-left-top">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      <div className="flex w-full flex-col">
        {/* top nav */}
        <TopNavBar />
        {/* top nav */}

        {/* content */}
        <div className="mb-[1rem] mr-3 flex-grow rounded-[1.5rem] border-[.3rem] border-primary bg-primary-light p-4">
          content
        </div>
        {/* content */}
      </div>
    </div>
  );
}

export default DashboardLayout;
