function NotificationItemUserSide({ active }) {
  return (
    <div
      className={`flex h-[5.5rem] w-full cursor-pointer items-center justify-between gap-3 rounded-[1rem] border-[3px] border-border-light ${active ? 'bg-bg-light' : ''} px-2 py-3`}
    >
      <div className="flex w-full items-center gap-2 overflow-hidden">
        {/* avatar */}
        <div className="size-16 flex-shrink-0">
          <img
            className="h-full w-full rounded-full border-[3.1px] border-border-light bg-white object-cover p-[0.1rem]"
            src="/img/avatar.png"
            alt="avatar"
          />
        </div>
        {/* avatar */}

        <div className="mr-1 h-7 w-[.2rem] rounded-full bg-border-light opacity-40"></div>

        <div className="flex w-full flex-col overflow-hidden">
          <h2
            className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.05rem] font-bold text-primary xl:max-w-[19rem]"
            title="New member joined the tastour camp event"
          >
            New member joined the tastour camp event
          </h2>
          <p
            className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-black xl:max-w-[19rem]"
            title="Say Hi to Ahmed Ben ahmed"
          >
            Say Hi to Ahmed Ben ahmed
          </p>
        </div>
      </div>

      {active && (
        <div className="size-[0.6rem] flex-shrink-0 rounded-full bg-primary"></div>
      )}
    </div>
  );
}

export default NotificationItemUserSide;
