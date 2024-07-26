function Button({ color = 'primary', children, size = 1, onClick }) {
  if (color === 'primary') {
    const sizeVarinats = {
      1: 'px-[1.2rem] py-[.6rem] text-[1rem] ',
      2: 'px-[1.8rem] py-[.8rem] text-[1.1rem]',
      3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
    };

    return (
      <button
        className={`rounded-full bg-primary ${sizeVarinats[size]} text-center font-bold text-white transition-all hover:bg-[#8b7bcb]`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return null;
}

export default Button;
