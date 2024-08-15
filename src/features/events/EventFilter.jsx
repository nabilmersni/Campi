import CheckmarksInput from 'src/ui/CheckmarksInput';
import FilterTag from 'src/ui/FilterTag';
import MultiRangeSlider from 'src/ui/MultiRangeSlider';
import Separator from 'src/ui/Separator';

function EventFilter() {
  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-hidden text-black-light">
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold">7,329 results</p>
        <button className="rounded-full border-[2px] border-border-light px-4 py-1 transition-all hover:bg-bg-light">
          clear filters
        </button>
      </div>

      <div className="flex w-full flex-wrap gap-3">
        <FilterTag data={'Beja'} />
        <FilterTag data={'Jendouba'} />
      </div>

      <Separator size="medium" />

      <div className="flex h-full min-h-1 w-full flex-col gap-2">
        <p className="mb-3 font-semibold text-primary">Filter your results</p>
        <div className="flex h-full min-h-1 flex-col gap-5 overflow-y-auto pr-3">
          <div className="flex flex-col items-center">
            <p className="mb-2 self-start text-sm font-semibold">Price Range</p>
            <MultiRangeSlider />
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2 self-start text-sm font-semibold">States</p>
            <CheckmarksInput />
          </div>
        </div>
      </div>

      <button className="w-full rounded-[0.5rem] bg-primary-light p-2 px-4 font-bold text-primary transition-all hover:bg-[#ddd6ff]">
        apply
      </button>
    </div>
  );
}

export default EventFilter;
