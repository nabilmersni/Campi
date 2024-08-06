import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';

function DashEventItemCard({ img = '/img/camp1.jpg' }) {
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
          <img src="/img/locationIcon.svg" alt="locationIcon" className="w-5" />
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

      <div className="mb-4 flex items-center gap-2">
        <div className="h-1 w-[3rem] rounded-full bg-primary-light"></div>
        <div className="h-1 w-[.5rem] rounded-full bg-primary-light"></div>
        <div className="h-1 w-[3rem] rounded-full bg-primary-light"></div>
      </div>

      <div className="flex w-full items-center justify-center gap-3 px-3">
        <Button type="iconBtn" icon={'view'} />
        <Button type="iconBtn" icon={'update'} />
        <Button type="iconBtn" icon={'delete'} />
      </div>
    </div>
  );
}

export default DashEventItemCard;
