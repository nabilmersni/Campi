function Separator({ size = 'small' }) {
  if (size === 'small') {
    return (
      <div className="bg mt-4 h-[0.35rem] w-12 flex-shrink-0 rounded-full bg-bg-light"></div>
    );
  }
}

export default Separator;
