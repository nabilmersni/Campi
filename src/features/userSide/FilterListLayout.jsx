import { useState, useEffect } from 'react';
import useClickOutside from 'src/hooks/useClickOutside';

function FilterListLayout({ children }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [topPosition, setTopPosition] = useState('9rem');
  const [topPositionLG, setTopPositionLG] = useState('12.3rem');

  const toggleFilterModal = () => {
    setIsFilterModalOpen((isOpen) => !isOpen);
  };

  const filterModalRef = useClickOutside(() => {
    setIsFilterModalOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newTopPosition = scrollY > 40 ? '3rem' : '9rem';
      const newTopPosition2 = scrollY > 100 ? '3rem' : '12.3rem';

      setTopPosition(newTopPosition);
      setTopPositionLG(newTopPosition2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex gap-7">
      <div
        className="fixed hidden h-[30rem] max-h-[30rem] w-[19.5rem] flex-shrink-0 flex-col rounded-[1rem] border-[3px] border-border-light bg-white p-4 transition-all duration-300 lg:flex"
        style={{ top: topPositionLG }}
      >
        {children[0]}
      </div>

      <div className="hidden max-h-[30rem] w-[19.5rem] flex-shrink-0 lg:block"></div>

      {/* filter modal */}
      <div
        ref={filterModalRef}
        className={`fixed ${isFilterModalOpen ? 'left-[20rem]' : 'left-[0rem]'} z-20 w-full transition-all duration-300 lg:hidden`}
        style={{ top: topPosition }}
      >
        <div
          onClick={toggleFilterModal}
          className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-r-[1rem] border-[3px] border-l-0 border-border-light bg-white transition-all hover:bg-primary-light"
        >
          <img src="/img/filterIcon.svg" alt="filterIcon" className="w-6" />
        </div>

        <div className="light-scrollbar absolute right-full top-0 h-[80vh] max-h-[30rem] w-full max-w-[19.5rem] overflow-y-auto rounded-[1rem] rounded-tr-none border-[3px] border-border-light bg-white p-4 shadow-lg">
          {children[0]}
        </div>
      </div>
      {/* filter modal */}

      <div className="flex min-h-[33rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white p-4">
        {children[1]}
      </div>
    </div>
  );
}

export default FilterListLayout;
