import NotificationList from 'src/features/notification/NotificationList';
import WelcomeTitle from 'src/features/userSide/WelcomeTitle';
import StatBox from 'src/features/userSide/StatBox';
import AvatarNameBox from 'src/ui/AvatarNameBox';
import Separator from 'src/ui/Separator';
import EventList from 'src/features/events/EventList';
import BrandsCarousel from 'src/ui/BrandsCarousel';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import reservationService from 'src/services/ReservationService';
import orderService from 'src/services/OrderService';

function HomeUserSidePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const [reservationsCount, setReservationsCount] = useState();
  const [odersCount, setOdersCount] = useState();

  useEffect(() => {
    const fetchStat = async () => {
      try {
        const [res1, res2] = await Promise.all([
          reservationService.getMyResCount(currentUser.uid),
          orderService.getMyOrdersCount(currentUser.uid),
        ]);

        setReservationsCount(res1);
        setOdersCount(res2);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchStat();
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <WelcomeTitle />

      <div className="mt-16 flex w-full flex-col gap-4 mlg:flex-row-reverse">
        <div className="flex h-[38rem] max-h-[38rem] flex-1 flex-col items-center rounded-[1rem] border-[4px] border-border-light bg-white p-3">
          <AvatarNameBox user={currentUser} />

          <Separator />

          <NotificationList />
        </div>

        <div className="flex flex-[2] flex-shrink-0 flex-col gap-4">
          <div className="flex flex-grow flex-col gap-4 lg:flex-row">
            <div className="flex-[3] rounded-[1rem] border-[4px] border-border-light bg-white p-4">
              <EventList type={'homeuserside'} />
            </div>

            <div className="flex flex-[1.3] flex-row gap-4 lg:flex-col">
              <StatBox num={reservationsCount} detail={'Events joined'} />

              <StatBox num={odersCount} detail={'Items Bought'} />
            </div>
          </div>

          <div className="flex h-[9rem] items-center justify-center rounded-[1rem] border-[4px] border-border-light bg-white p-4">
            <BrandsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUserSidePage;
