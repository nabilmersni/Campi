import NotificationList from 'src/features/notification/NotificationList';
import WelcomeTitle from 'src/features/userSide/WelcomeTitle';
import StatBox from 'src/features/userSide/StatBox';
import AvatarNameBox from 'src/ui/AvatarNameBox';
import Separator from 'src/ui/Separator';

function HomeUserSidePage() {
  return (
    <div className="flex w-full flex-col items-center">
      <WelcomeTitle />

      <div className="mt-16 flex w-full flex-col gap-4 xl:flex-row-reverse">
        <div className="flex h-[38rem] max-h-[38rem] flex-1 flex-col items-center rounded-[1rem] border-[4px] border-border-light bg-white p-3">
          <AvatarNameBox />

          <Separator />

          <NotificationList />
        </div>

        <div className="flex flex-[2] flex-col gap-4">
          <div className="flex flex-grow flex-col gap-4 lg:flex-row">
            <div className="flex-[3] rounded-[1rem] border-[4px] border-border-light bg-white p-4">
              2
            </div>

            <div className="flex flex-[1.3] flex-row gap-4 lg:flex-col">
              <StatBox num={23} detail={'Events joined'} />

              <StatBox num={15} detail={'Items Bought'} />
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
