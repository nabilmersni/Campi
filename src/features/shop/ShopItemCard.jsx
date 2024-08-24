import LinkBtn from 'src/ui/LinkBtn';

function ShopItemCard({ type = 'landingPage', img = '/img/tent.png' }) {
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

  // if (type === 'userside') {
  //   return (
  //     <div className="flex h-fit min-h-[16rem] w-full flex-shrink-0 flex-col gap-5 rounded-[1.5rem] border-[3px] border-border-light bg-[#F5F1F6] p-2 md:flex-row">
  //       <div className="h-[11rem] w-full flex-shrink-0 rounded-[1rem] bg-[#eae4ff] md:h-full md:w-[17rem] lg:w-[15rem] xl:w-[17rem]">
  //         <img
  //           src="/img/tent.png"
  //           className="h-full w-full rounded-[1.5rem] object-contain"
  //           alt="camp img"
  //         />
  //       </div>

  //       <div className="flex w-full flex-col items-center justify-center py-2 md:items-start">
  //         <h2 className="mb-2 text-2xl font-bold text-primary">
  //           Camping on Testour
  //         </h2>

  //         <p className="mb-4 line-clamp-2 md:line-clamp-3" title="text">
  //           Lorem Ipsum is simply dummy text of the printing and typesetting
  //           industry. Lorem Ipsum has been the industry standard dummy text ever
  //           since the 1500s, when an unknown printer took a galley of type and
  //           scrambled it
  //         </p>

  //         <div className="mb-6 flex items-center gap-5">
  //           <div className="flex flex-1 items-center justify-center gap-2">
  //             <img
  //               src="/img/locationIcon.svg"
  //               alt="locationIcon"
  //               className="w-4"
  //             />
  //             <span className="text-sm font-bold text-primary">Backpack</span>
  //           </div>
  //         </div>

  //         <div className="flex flex-col items-center justify-between gap-3 md:w-full md:flex-row md:gap-1">
  //           <div className="flex w-full items-center gap-5">
  //             <LinkBtn type={'primaryLight'}>more info</LinkBtn>
  //             <div className="size-[.3rem] rounded-full bg-primary sm:block"></div>
  //             <LinkBtn type={'primaryLight'}>Add to cart</LinkBtn>
  //           </div>

  //           <p className="mr-3 font-bold text-primary">30TND</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (type === 'userside') {
    return (
      <div className="flex min-h-[20rem] w-fit flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 shadow-md">
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
}

export default ShopItemCard;
