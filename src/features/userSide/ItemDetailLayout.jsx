function ItemDetailLayout({ children }) {
  return (
    <div className="relative flex flex-col gap-6 text-black-light lg:flex-row">
      <div className="flex min-h-[30rem] flex-grow flex-col rounded-[1rem] border-[3px] border-border-light bg-white bg-[url('/img/Cartpattern.svg')] bg-center bg-repeat p-4 sm:p-6 lg:w-[22rem]">
        {children?.[0]}
      </div>

      <div className="bg flex max-h-[31rem] w-full flex-shrink-0 flex-col rounded-[1rem] border-[3px] border-b-[0.7rem] border-t-[0.7rem] border-border-light bg-border-light lg:w-[22rem]">
        <div className="flex h-full w-full flex-shrink-0 flex-col rounded-[0.5rem] border-[3px] border-border-light bg-white p-4">
          {children?.[1]}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailLayout;
