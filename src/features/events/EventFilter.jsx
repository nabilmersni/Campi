import FilterTag from 'src/ui/FilterTag';
import Separator from 'src/ui/Separator';

function EventFilter() {
  return (
    <div className="flex flex-col items-center gap-6 overflow-y-auto text-black-light">
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold">7,329 results</p>
        <button className="rounded-full border-[2px] border-border-light px-4 py-1 transition-all hover:bg-bg-light">
          clear filters
        </button>
      </div>

      <div className="flex w-full flex-wrap gap-3">
        <FilterTag data={'Beja'} />
        <FilterTag data={'Beja'} />
        <FilterTag data={'Jendouba'} />
        <FilterTag data={'min 30TND'} />
      </div>

      <Separator size="medium" />

      <div className="flex w-full flex-col gap-2">
        <p className="font-semibold">Filter your results</p>
      </div>
    </div>
  );
}

export default EventFilter;
