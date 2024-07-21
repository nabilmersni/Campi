import Lottie from 'lottie-react';

function ValueItem({ title, description, animation, isSolar }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-fit flex-col items-center">
        <div className="mb-2 size-[6rem] object-cover md:size-[7rem]">
          <Lottie animationData={animation} loop={true} autoPlay={true} />
        </div>

        <h2 className="mb-5 text-lg font-extrabold text-primary">{title}</h2>
      </div>

      <p className="max-w-[27rem] text-base lg:max-w-[25rem]">{description}</p>
    </div>
  );
}

export default ValueItem;
