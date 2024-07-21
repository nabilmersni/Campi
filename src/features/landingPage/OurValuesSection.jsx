import Lottie from 'lottie-react';
import campFireAnimation from '../../assets/lottiesAnimations/camp-firee.json';
import campFireOffAnimation from '../../assets/lottiesAnimations/camp-firee-off.json';
import campForEveryOneAnimation from '../../assets/lottiesAnimations/camp-security.json';
import solarEnergyAnimation from '../../assets/lottiesAnimations/solar.json';
import recycleAnimation from '../../assets/lottiesAnimations/recycle.json';
import Title from 'src/ui/Title';
import ValueItem from './ValueItem';
import Divider from './Divider';

function OurValuesSection() {
  return (
    <section
      id="values"
      className="relative mx-auto max-w-[86rem] p-5 pt-[5.5rem] sm:pt-[15vw] md:pt-[27vw] lg:pt-[25vw] xlg:pt-[27rem]"
    >
      <div className="flex flex-col items-center">
        <div>
          <Title>Our Values</Title>
          <p className="mx-auto max-w-[35rem] text-center text-lg text-black-light">
            Campi is committed to values that improve the customer experience
            and better the world that we camp and recreate in.
          </p>
        </div>

        <div className="my-5 h-1 w-20 rounded-full bg-primary opacity-50"></div>

        <div className="mt-[1.5rem] flex w-full flex-col justify-between gap-0 px-[0] lg:flex-row lg:gap-8 lg:px-[2rem]">
          <ValueItem
            title={'Camping Is For Everyone'}
            description={
              'We believe that everyone should be able to enjoy the outdoors irrespective of their level ethnicity, background and/or identity. Ramble is committed to making  campgrounds accessible and welcoming to all.'
            }
            animation={campForEveryOneAnimation}
          />

          <Divider />

          <ValueItem
            title={'Reducing Energy Needs'}
            description={
              'All locations will be completely off grid, leveraging solar power for electricity and water heating, with solar-powered lighting to create the perfect environment-friendly atmosphere to spend time with family and friends.'
            }
            animation={solarEnergyAnimation}
            isSolar={true}
          />

          <Divider />

          <ValueItem
            title={'Sustainable Materials & Practices'}
            description={
              'Wherever possible we will use materials and products that are designed for long term outdoor durability, minimizing waste, and maximizing the utilization of recycled materials.'
            }
            animation={recycleAnimation}
          />
        </div>
      </div>

      <Lottie
        className="absolute left-0 top-[1rem] hidden w-[4rem] xsm:block sm:top-[0] sm:w-[6rem] md:top-[5rem] md:w-[8rem] lg:top-[7rem] xlg:top-[14rem]"
        animationData={campFireAnimation}
        loop={true}
        autoPlay={true}
      />

      <Lottie
        className="absolute right-0 top-[1rem] hidden w-[4rem] xsm:block sm:top-[0] sm:w-[6rem] md:top-[5rem] md:w-[8rem] lg:top-[7rem] xlg:top-[14rem]"
        animationData={campFireOffAnimation}
        loop={true}
        autoPlay={true}
      />
    </section>
  );
}

export default OurValuesSection;
