function AvatarNameBox() {
  return (
    <div className="flex w-full items-center gap-3 rounded-[1rem] bg-bg-light p-4">
      <div className="size-20 flex-shrink-0">
        <img
          className="h-full w-full rounded-full border-[3.1px] border-border-light bg-white object-cover p-1"
          src="/img/avatar2.png"
          alt=""
        />
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-black-light">Nabil Mersni</h2>
          <div className="size-2 rounded-full bg-[#91CC94]"></div>
        </div>
        <p
          className="overflow-hidden text-ellipsis whitespace-nowrap text-black-light xl:max-w-[20rem]"
          title="nabilmersni123@gmail.com"
        >
          nabilmersni123@gmail.com
        </p>
      </div>
    </div>
  );
}

export default AvatarNameBox;