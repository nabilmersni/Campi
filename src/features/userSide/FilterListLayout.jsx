import { useState } from 'react';
import useClickOutside from 'src/hooks/useClickOutside';

function FilterListLayout({ children }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleFilterModal = () => {
    setIsFilterModalOpen((isOpen) => !isOpen);
  };

  const filterModalRef = useClickOutside(() => {
    setIsFilterModalOpen(false);
  });

  return (
    <div className="relative flex gap-7">
      <div className="hidden min-h-[30rem] w-[19.5rem] flex-shrink-0 flex-col rounded-[1rem] border-[3px] border-border-light bg-white p-4 lg:flex">
        {children[0]}
      </div>

      {/* filter modal */}
      <div
        ref={filterModalRef}
        className={`fixed ${isFilterModalOpen ? 'left-[20rem]' : 'left-[0rem]'} top-[9rem] z-20 w-full transition-all duration-300 lg:hidden`}
      >
        <div
          onClick={toggleFilterModal}
          className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-r-[1rem] border-[3px] border-l-0 border-border-light bg-white transition-all hover:bg-primary-light"
        >
          <img src="/img/filterIcon.svg" alt="filterIcon" className="w-6" />
        </div>

        <div className="absolute right-full top-0 z-10 h-[30rem] min-h-[30rem] w-full max-w-[19.5rem] rounded-[1rem] rounded-tr-none border-[3px] border-border-light bg-white p-4 shadow-lg">
          {children[0]}
        </div>
      </div>
      {/* filter modal */}

      <div className="flex min-h-[80rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white p-4">
        {children[1]}
      </div>
    </div>
  );
}

export default FilterListLayout;
