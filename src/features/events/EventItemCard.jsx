import LinkBtn from 'src/ui/LinkBtn';
import Button from 'src/ui/Button';
import { formatDateRange } from 'src/utils/UtilsFunctions';
import { Link } from 'react-router-dom';

function EventItemCard({ type = 'landingPage', img = '/img/camp1.jpg', item }) {
  if (type === 'landingPage') {
    return (
      <div className="flex h-fit min-h-[20rem] flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-white-light p-3 sm:min-w-[23rem]">
        <div className="mb-2 h-[10rem] w-full rounded-[2rem]">
          <img
            src={img}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-cover"
          />
        </div>
        <h2 className="mb-4 text-xl font-bold text-primary">
          Camping on Testour
        </h2>

        <div className="mb-6 flex items-center justify-center gap-5">
          <div className="flex flex-1 items-center justify-center gap-2">
            <img
              src="/img/locationIcon.svg"
              alt="locationIcon"
              className="w-5"
            />
            <span className="text-sm font-bold text-primary">Tunis, Béja</span>
          </div>
          <div className="size-2 rounded-full bg-primary"></div>
          <div className="flex flex-1 items-center justify-center gap-2">
            <img src="/img/dateIcon.svg" alt="locationIcon" className="w-5" />
            <span className="w-fit whitespace-nowrap text-sm font-bold text-primary">
              1 Fev - 5 Fev
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-between px-3">
          <LinkBtn type={'primaryLight'}>more info</LinkBtn>
          <div className="size-[.3rem] rounded-full bg-primary sm:block"></div>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <img
              src="/img/peopleIcon.svg"
              alt="peopleIcon"
              className="hidden w-16 xsm:block sm:w-20"
            />
            <LinkBtn type={'primaryLight'}>Join</LinkBtn>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dash') {
    return (
      <div className="flex h-fit min-h-[20rem] flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-white-light p-3 sm:min-w-[23rem]">
        <div className="mb-2 h-[10rem] w-full rounded-[1rem]">
          <img
            src={item.photoURLs[0] || img}
            alt="camp-img"
            className="h-full w-full rounded-[1.5rem] rounded-t-[2rem] object-cover"
          />
        </div>
        <h2 className="mb-4 text-xl font-bold text-primary">{item.title}</h2>

        <div className="mb-6 flex items-center justify-center gap-5">
          <div className="flex flex-1 items-center justify-center gap-2">
            <img
              src="/img/locationIcon.svg"
              alt="locationIcon"
              className="w-5"
            />
            <span className="text-sm font-bold text-primary">
              Tunisia, {item.state}
            </span>
          </div>
          <div className="size-2 rounded-full bg-primary"></div>
          <div className="flex flex-1 items-center justify-center gap-2">
            <img src="/img/dateIcon.svg" alt="locationIcon" className="w-5" />
            <span className="w-fit whitespace-nowrap text-sm font-bold text-primary">
              {formatDateRange(item.startDate, item.endDate)}
            </span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <div className="h-1 w-[3rem] rounded-full bg-primary-light"></div>
          <div className="h-1 w-[.5rem] rounded-full bg-primary-light"></div>
          <div className="h-1 w-[3rem] rounded-full bg-primary-light"></div>
        </div>

        <div className="flex w-full items-center justify-center gap-3 px-3">
          <Link to={`/userside/events/${item.id}`}>
            <Button type="iconBtn" icon={'view'} />
          </Link>
          <Button type="iconBtn" icon={'update'} />
          <Button type="iconBtn" icon={'delete'} />
        </div>
      </div>
    );
  }

  if (type === 'homeuserside') {
    return (
      <div className="flex h-fit w-full flex-shrink-0 flex-col justify-center gap-3 rounded-[1.5rem] border-[3px] border-border-light bg-[#F5F1F6] p-2 md:h-[12rem] md:flex-row">
        <div className="h-full w-full flex-shrink-0 self-center sm:w-[12rem]">
          <img
            src="/img/camp1.jpg"
            className="h-full w-full rounded-[1.5rem] object-cover"
            alt="camp img"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center py-2">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Camping on Testour
          </h2>

          <div className="mb-6 flex items-center justify-center gap-5">
            <div className="flex flex-1 items-center justify-center gap-2">
              <img
                src="/img/locationIcon.svg"
                alt="locationIcon"
                className="w-4"
              />
              <span className="text-sm font-bold text-primary">
                Tunis, Béja
              </span>
            </div>
            <div className="size-[0.3rem] rounded-full bg-primary"></div>
            <div className="flex flex-1 items-center justify-center gap-2">
              <img src="/img/dateIcon.svg" alt="locationIcon" className="w-4" />
              <span className="w-fit whitespace-nowrap text-sm font-bold text-primary">
                1 Fev - 5 Fev
              </span>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-5 px-3">
            <LinkBtn type={'primaryLight'}>more info</LinkBtn>
            <div className="size-[.3rem] rounded-full bg-primary sm:block"></div>
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <img
                src="/img/peopleIcon.svg"
                alt="peopleIcon"
                className="sm:w-18 hidden w-16 sm:block"
              />
              <LinkBtn type={'primaryLight'}>Join</LinkBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'eventuserside') {
    return (
      // <Link to={`/userside/events/${item.id}`}>
      <div className="flex h-fit min-h-[16rem] w-full flex-shrink-0 flex-col gap-5 rounded-[1.5rem] border-[3px] border-border-light bg-[#F5F1F6] p-2 md:flex-row">
        <div className="h-[11rem] w-full flex-shrink-0 md:h-full md:w-[17rem] lg:w-[15rem] xl:w-[17rem]">
          <img
            src={item.photoURLs[0] || img}
            className="h-full w-full rounded-[1.5rem] object-center md:object-cover"
            alt="camp img"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center py-2 md:items-start">
          <h2 className="mb-2 text-2xl font-bold text-primary">{item.title}</h2>

          <p className="mb-4 line-clamp-2 md:line-clamp-3" title="text">
            {item.description}
          </p>

          <div className="mb-6 flex items-center gap-5">
            <div className="flex flex-1 items-center justify-center gap-2">
              <img
                src="/img/locationIcon.svg"
                alt="locationIcon"
                className="w-4"
              />
              <span className="text-sm font-bold text-primary">
                Tunis, {item.state}
              </span>
            </div>
            <div className="size-[0.3rem] rounded-full bg-primary"></div>
            <div className="flex flex-1 items-center justify-center gap-2">
              <img src="/img/dateIcon.svg" alt="locationIcon" className="w-4" />
              <span className="w-fit whitespace-nowrap text-sm font-bold text-primary">
                {formatDateRange(item.startDate, item.endDate)}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 md:w-full md:flex-row md:gap-1">
            <div className="flex w-full items-center gap-5">
              <LinkBtn to={`/userside/events/${item.id}`} type={'primaryLight'}>
                more info
              </LinkBtn>
              {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div>
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <img
                  src="/img/peopleIcon.svg"
                  alt="peopleIcon"
                  className="sm:w-18 hidden w-16 xl:block"
                />
                <LinkBtn type={'primaryLight'}>Join</LinkBtn>
              </div> */}
            </div>

            <p className="mr-0 font-bold text-primary sm:mr-3">
              {item.price}TND
            </p>
          </div>
        </div>
      </div>
      // </Link>
    );
  }

  if (type === 'reservationuserside') {
    return (
      <div className="flex h-fit min-h-[20rem] flex-col items-center rounded-[2.5rem] border-[.2rem] border-primary bg-white-light p-3 sm:min-w-[23rem]">
        <div className="mb-2 h-[10rem] w-full">
          <img
            src={item.photoURLs[0] || img}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[2rem] object-cover"
          />
        </div>
        <h2 className="mb-4 text-xl font-bold text-primary">{item.title}</h2>

        <div className="mb-6 flex items-center justify-center gap-5">
          <div className="flex flex-1 items-center justify-center gap-2">
            <img
              src="/img/locationIcon.svg"
              alt="locationIcon"
              className="w-5"
            />
            <span className="text-sm font-bold text-primary">
              Tunis, {item.state}
            </span>
          </div>
          <div className="size-2 rounded-full bg-primary"></div>
          <div className="flex flex-1 items-center justify-center gap-2">
            <img src="/img/dateIcon.svg" alt="locationIcon" className="w-5" />
            <span className="w-fit whitespace-nowrap text-sm font-bold text-primary">
              {formatDateRange(item.startDate, item.endDate)}
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center px-3">
          <LinkBtn to={`/userside/events/${item.id}`} type={'primaryLight'}>
            more info
          </LinkBtn>
        </div>
      </div>
    );
  }
}

export default EventItemCard;
