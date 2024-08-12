import NotificationItemUserSide from './NotificationItemUserSide';

function NotificationList() {
  return (
    <div className="mt-12 flex w-full flex-col gap-6 overflow-hidden">
      {/* title + filter */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[1.1rem] font-semibold text-black-light">
          Notifications
        </h1>
        <div className="flex gap-3">
          <button className="rounded-full bg-bg-light px-5 py-[0.4rem] text-sm transition-all hover:bg-primary-light">
            All
          </button>
          <button className="rounded-full border-[2px] border-bg-light px-5 py-[0.4rem] text-sm transition-all hover:bg-bg-light">
            Unread
          </button>
        </div>
      </div>
      {/* title + filter */}

      <div className="light-scrollbar flex w-full flex-col gap-4 overflow-y-auto pr-3">
        {/* notification items */}
        <NotificationItemUserSide active={true} />
        <NotificationItemUserSide />
        <NotificationItemUserSide />
        <NotificationItemUserSide />
        <NotificationItemUserSide />
        {/* notification items */}
      </div>
    </div>
  );
}

export default NotificationList;
