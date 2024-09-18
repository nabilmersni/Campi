import Title from 'src/ui/Title';
import ShopList from '../shop/ShopList';

function ShopSection() {
  return (
    <section id="shop" className="flex flex-col items-center justify-center">
      <div className="relative">
        <Title>Shop</Title>
        <p className="mx-auto max-w-[36rem] text-center text-lg text-black-light">
          Explore our top-quality camping gear made from sustainable materials,
          perfect for enhancing your outdoor adventures.
        </p>
        <div className="mx-auto my-5 h-1 w-20 rounded-full bg-primary opacity-50"></div>

        <div className="top-100 absolute left-0 right-0 mx-auto mt-4 min-h-[40rem] w-full rounded-[2rem] p-7 pt-32 sm:mt-9 sm:rounded-[3rem] md:mt-12 lg:mt-20">
          <div className="absolute left-0 right-0 top-[-2.5%] z-10 mx-auto w-fit sm:top-[-4%] md:top-[-5%] lg:top-[-5%]">
            <img
              src="/img/shopFace.svg"
              alt="shopFace"
              className="w-[18rem] sm:w-[30rem] md:w-[40rem] lg:w-[55rem]"
            />
          </div>
        </div>
      </div>

      <ShopList type={'landingPage'} />
    </section>
  );
}

export default ShopSection;
