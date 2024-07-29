import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[url('/img/dash-bg.svg')] bg-cover bg-left-top">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      <div className="flex w-full flex-col">
        {/* top nav */}
        <div className="h-[4.5rem]">top nav</div>
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
