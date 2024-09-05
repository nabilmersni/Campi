import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';

function ShopItemCard({ type = 'landingPage', img = '/img/tent.png', item }) {
  if (type === 'landingPage') {
    return (
      <div className="flex min-h-[20rem] w-full flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 sm:w-fit sm:min-w-[23rem]">
        <div className="mb-2 h-[10rem] w-full rounded-[2rem] bg-white-light p-3">
          <img
            src={img}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-contain"
          />
        </div>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-primary">REI Co-op</h2>
          <span className="max-w-[15rem] overflow-hidden truncate whitespace-nowrap text-[.8rem] text-primary">
            Trail Hut 2 Tent with Footprint
          </span>
        </div>

        <div className="mb-3 flex items-center justify-center gap-5">
          <div className="flex flex-1 items-center justify-center gap-2">
            <img src="/img/starsIcon.svg" alt="locationIcon" className="w-20" />
            <span className="text-sm font-bold text-primary">(26)</span>
          </div>
        </div>

        <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>

        <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
          <span className="text-xl font-extrabold text-primary">$199</span>
          <LinkBtn size={4} type={'primaryLight'}>
            Add to cart
          </LinkBtn>
          {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div> */}
        </div>
      </div>
    );
  }

  if (type === 'dash') {
    return (
      <div className="flex min-h-[20rem] w-full flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 sm:w-fit sm:min-w-[22rem]">
        <div className="mb-2 h-[10rem] w-full rounded-[2rem] bg-white-light p-3">
          <img
            src={item.photoURLs[0]}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-contain"
          />
        </div>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-primary">{item.title}</h2>
          <span className="max-w-[15rem] overflow-hidden truncate whitespace-nowrap text-[.8rem] text-primary">
            {item.subtitle}
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
          <span className="text-xl font-extrabold text-primary">
            ${item.price}
          </span>
          <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>
          <div className="flex w-full items-center justify-center gap-3 px-3">
            <Button type="iconBtn" icon={'view'} />
            <Button type="iconBtn" icon={'update'} />
            <Button type="iconBtn" icon={'delete'} />
          </div>
          {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div> */}
        </div>
      </div>
    );
  }

  if (type === 'userside') {
    return (
      <div className="flex min-h-[20rem] w-fit flex-col items-center rounded-[2rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 shadow-md sm:w-fit sm:min-w-[22rem]">
        <div className="relative mb-2 h-[10rem] w-full rounded-[2rem] bg-white-light p-3">
          <img
            src={item.photoURLs[0]}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-contain"
          />

          <div className="absolute right-2 top-2 rounded-full border-[3px] border-border-light bg-primary-light p-1 px-4 text-sm font-semibold">
            {item.category}
          </div>
        </div>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-primary">{item.title}</h2>
          <span className="max-w-[15rem] overflow-hidden truncate whitespace-nowrap text-[.8rem] text-primary">
            {item.subtitle}
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
          <span className="text-xl font-extrabold text-primary">
            ${item.price}
          </span>
          <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>
          <LinkBtn size={4} type={'primaryLight'}>
            Add to cart
          </LinkBtn>
          {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div> */}
        </div>
      </div>
    );
  }
}

export default ShopItemCard;
