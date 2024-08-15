function Separator({ size = 'small' }) {
  let style;

  if (size === 'small') {
    style = 'h-[0.35rem] w-12  mt-4';
  } else if (size === 'medium') {
    style = 'h-[0.25rem] w-[35%]';
  } else if (size === 'big') {
    style = 'h-[0.25rem] w-[90%]  mt-4';
  }

  return (
    <div className={`bg ${style} flex-shrink-0 rounded-full bg-bg-light`}></div>
  );
}

export default Separator;
