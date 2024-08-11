import NotificationListUserSide from 'src/features/notification/NotificationListUserSide';
import WelcomeTitle from 'src/features/userSide/WelcomeTitle';
import StatBox from 'src/features/userSide/StatBox';

function HomeUserSidePage() {
  return (
    <div className="flex w-full flex-col items-center">
      <WelcomeTitle />

      <div className="mt-16 flex w-full flex-col gap-4 xl:flex-row-reverse">
        <div className="flex h-[38rem] max-h-[38rem] flex-1 flex-col items-center rounded-[1rem] border-[4px] border-border-light bg-white p-3">
          {/* avatar & name */}
          <div className="flex w-full items-center gap-3 rounded-[1rem] bg-bg-light p-4">
            <div className="size-20 flex-shrink-0">
              <img
                className="h-full w-full rounded-full border-[3.1px] border-border-light bg-white object-cover p-1"
                src="/img/avatar2.png"
                alt=""
              />
            </div>

            <div className="overflow-hidden">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-black-light">
                  Nabil Mersni
                </h2>
                <div className="size-2 rounded-full bg-[#91CC94]"></div>
              </div>
              <p
                className="overflow-hidden text-ellipsis whitespace-nowrap text-black-light xl:max-w-[20rem]"
                title="nabilmersni123@gmail.com"
              >
                nabilmersni123@gmail.com
              </p>
            </div>
          </div>
          {/* avatar & name */}

          <div className="bg mt-4 h-[0.35rem] w-12 flex-shrink-0 rounded-full bg-bg-light"></div>

          <NotificationListUserSide />
        </div>

        <div className="flex flex-[2] flex-col gap-4">
          <div className="flex flex-grow flex-col gap-4 lg:flex-row">
            <div className="flex-[3] rounded-[1rem] border-[4px] border-border-light bg-white p-4">
              2
            </div>

            <div className="flex flex-[1.3] flex-row gap-4 lg:flex-col">
              <StatBox num={23} detail={'Events joined'} />

              <StatBox num={15} detail={'Products Purchased'} />
            </div>
          </div>

          <div className="h-[9rem] rounded-[1rem] border-[4px] border-border-light bg-white p-4">
            4
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUserSidePage;
