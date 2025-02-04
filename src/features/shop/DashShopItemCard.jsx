import LinkBtn from 'src/ui/LinkBtn';

function DashShopItemCard({ img = '/img/tent.png' }) {
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

      <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
        <span className="text-xl font-extrabold text-primary">$199</span>
        <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>
        <LinkBtn size={4} type={'primaryLight'}>
          Add to cart
        </LinkBtn>
        {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div> */}
      </div>
    </div>
  );
}

export default DashShopItemCard;
