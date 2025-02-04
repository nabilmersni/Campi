function FilterTag({ data, handleDeleteTag }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[0.5rem] border-[2px] border-border-light bg-white-light px-2 py-1">
      <p className="line text-sm font-bold">{data}</p>
      <button
        onClick={handleDeleteTag}
        className="rounded-[0.2rem] p-1 hover:bg-primary-light"
      >
        <img src="/img/closeIcon.svg" alt="closeIcon" className="w-2" />
      </button>
    </div>
  );
}

export default FilterTag;
