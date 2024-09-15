import { Doughnut } from 'react-chartjs-2';
import WelcomeTitle from 'src/features/userSide/WelcomeTitle';
import StatBox from 'src/features/userSide/StatBox';
import Separator from 'src/ui/Separator';
import BrandsCarousel from 'src/ui/BrandsCarousel';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import userService from 'src/services/UserService';
import shopService from 'src/services/ShopService';
import eventService from 'src/services/EventService';
import Loader from 'src/ui/Loader';
import reservationService from 'src/services/ReservationService';
import orderService from 'src/services/OrderService';
ChartJS.register(ArcElement, Tooltip, Legend);

function DashHomePage() {
  const [reservationCount, setReservationCount] = useState();
  const [ordersCount, setOrdersCount] = useState();
  const [statData, setStatData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stats = async () => {
      setIsLoading(true);
      try {
        const [res1, res2, res3, res4, res5] = await Promise.all([
          userService.totalUserCount(),
          shopService.totalProductCount(),
          eventService.totalEventCount(),
          reservationService.totalReservationCount(),
          orderService.totalOrderCount(),
        ]);

        setReservationCount(res4);
        setOrdersCount(res5);

        setStatData({
          labels: ['Users', 'Products', 'Events'],
          datasets: [
            {
              label: 'Total count',
              data: [res1, res2, res3],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    stats();
  }, []);

  return (
    <div className="h-dvh overflow-hidden overflow-y-auto">
      {isLoading && <Loader />}
      <div className="flex w-full flex-col items-center pr-4">
        <WelcomeTitle />

        <div className="mt-16 flex w-full flex-col gap-4 mlg:flex-row-reverse">
          {/* <div className="flex h-[38rem] max-h-[38rem] flex-1 flex-col items-center rounded-[1rem] border-[4px] border-border-light bg-white p-3">
            <AvatarNameBox />

            <Separator />

            <NotificationList />
          </div> */}

          <div className="flex flex-[2] flex-shrink-0 flex-col gap-4">
            <div className="flex flex-grow flex-col gap-4 lg:flex-row">
              <div className="h-[28rem] flex-[2.5] rounded-[1rem] border-[4px] border-border-light bg-white p-4">
                <div className="flex h-full max-h-[35rem] flex-col items-center gap-10 overflow-hidden">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-primary">
                      Users, Events, and Products Overview
                    </h2>
                    <Separator />
                  </div>
                  <div className="light-scrollbar flex h-full w-full flex-col items-center justify-center gap-5 overflow-y-auto pr-3">
                    <div className="flex h-full w-full justify-around gap-4">
                      {statData && <Doughnut data={statData} />}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-[1.3] flex-row gap-4 lg:flex-col">
                <StatBox num={ordersCount} detail={'Total reservations'} />

                <StatBox num={reservationCount} detail={'Total Sales'} />
              </div>
            </div>

            <div className="flex h-[9rem] items-center justify-center rounded-[1rem] border-[4px] border-border-light bg-white p-4">
              <BrandsCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHomePage;
