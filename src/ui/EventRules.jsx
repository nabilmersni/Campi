function EventRules() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
      <div className="flex items-center gap-2">
        <img src="/img/noSmokingIcon.svg" alt="noSmoking" className="w-8" />
        <p className="font-bold text-black-light">No Smoking</p>
      </div>

      {/* <div className="size-2 rounded-full bg-primary"></div> */}

      <div className="flex items-center gap-2">
        <img src="/img/noAlcohol.svg" alt="noAlcohol" className="w-8" />
        <p className="font-bold text-black-light">No Alcohol</p>
      </div>

      {/* <div className="size-2 rounded-full bg-primary"></div> */}

      <div className="flex items-center gap-2">
        <img src="/img/gearsIcon.svg" alt="gearsIcon" className="w-7" />
        <p className="font-bold text-black-light">Camping gears are required</p>
      </div>

      {/* <div className="size-2 rounded-full bg-primary"></div> */}

      <div className="flex items-center gap-2">
        <img src="/img/familyIcon.svg" alt="familyIcon" className="w-8" />
        <p className="font-bold text-black-light">Family-Friendly</p>
      </div>
    </div>
  );
}

export default EventRules;
