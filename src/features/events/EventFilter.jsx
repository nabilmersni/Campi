import StatesInput from 'src/ui/StatesInput';
import FilterTag from 'src/ui/FilterTag';
import Separator from 'src/ui/Separator';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { deleteState, reset, setFiltredEvents } from './EventSlice';
import MultiRangeSliderEvent from 'src/ui/MultiRangeSliderEvent';

function EventFilter() {
  const { filtredEvents, states, priceRange } = useSelector(
    (state) => state.event,
  );
  const { data: events } = useQuery({ queryKey: ['events'] });
  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    dispatch(
      setFiltredEvents(
        events.filter((event) => {
          const statesFilter =
            states.length === 0 ? true : states.includes(event.state);

          const priceRangeFilter =
            priceRange[0] <= event.price && priceRange[1] >= event.price;

          return statesFilter && priceRangeFilter;
        }),
      ),
    );
  };

  const handleClearFilter = () => {
    dispatch(reset());
    dispatch(setFiltredEvents(events));
  };

  const handleDeleteTag = (state) => {
    dispatch(deleteState(state));
  };

  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-hidden text-black-light">
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold">{filtredEvents?.length || 0} results</p>
        <button
          onClick={handleClearFilter}
          className="rounded-full border-[2px] border-border-light px-4 py-1 transition-all hover:bg-bg-light"
        >
          clear filters
        </button>
      </div>

      {states.length > 0 && (
        <div className="flex w-full flex-wrap gap-3">
          {states.map((state) => (
            <FilterTag
              key={state}
              handleDeleteTag={() => handleDeleteTag(state)}
              data={state}
            />
          ))}
        </div>
      )}

      <Separator size="medium" />

      <div className="flex h-full min-h-1 w-full flex-col gap-2">
        <p className="mb-3 font-semibold text-primary">Filter your results</p>
        <div className="flex h-full min-h-1 flex-col gap-5 overflow-y-auto pr-3">
          <div className="flex flex-col items-center">
            <p className="mb-2 self-start text-sm font-semibold">Price Range</p>
            <MultiRangeSliderEvent />
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2 self-start text-sm font-semibold">States</p>
            <StatesInput />
          </div>
        </div>
      </div>

      <button
        onClick={handleApplyFilter}
        className="w-full rounded-[0.5rem] bg-primary-light p-2 px-4 font-bold text-primary transition-all hover:bg-[#ddd6ff]"
      >
        apply
      </button>
    </div>
  );
}

export default EventFilter;
