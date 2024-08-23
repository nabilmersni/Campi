import { useEffect, useState } from 'react';

function ItemDetailLayout({ children }) {
  const [topPosition, setTopPosition] = useState('12.3rem');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newTopPosition = scrollY > 95 ? '2rem' : '12.3rem';

      setTopPosition(newTopPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col gap-6 text-black-light lg:flex-row">
      <div className="flex min-h-[30rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white bg-[url('/img/Cartpattern.svg')] bg-center bg-repeat p-4 sm:p-6 lg:w-[22rem]">
        {children?.[0]}
      </div>

      <div className="relative hidden h-fit max-h-[31rem] w-full flex-shrink-0 flex-col rounded-[1rem] lg:flex lg:w-[22rem]">
        <div
          className="fixed flex h-fit w-full flex-shrink-0 flex-col rounded-[1rem] border-[3px] border-b-[0.7rem] border-t-[0.7rem] border-border-light bg-border-light transition-all lg:w-[22rem]"
          style={{ top: topPosition }}
        >
          <div className="flex h-fit w-full flex-shrink-0 flex-col rounded-[0.5rem] border-[3px] border-border-light bg-white p-4">
            {children?.[1]}
          </div>
        </div>
      </div>

      <div className="flex h-fit max-h-[31rem] w-full flex-shrink-0 flex-col rounded-[1rem] border-[3px] border-b-[0.7rem] border-t-[0.7rem] border-border-light bg-border-light transition-all lg:hidden lg:w-[22rem]">
        <div className="flex h-full w-full flex-shrink-0 flex-col rounded-[0.5rem] border-[3px] border-border-light bg-white p-4">
          {children?.[1]}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailLayout;
