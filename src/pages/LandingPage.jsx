import HeroSection from 'src/features/landingPage/HeroSection';
import useScrollPositionHistory from 'src/hooks/useScrollPositionHistory';
import NavBar from 'src/ui/NavBar';

function LandingPage() {
  useScrollPositionHistory();
  return (
    <div className={`relative w-full overflow-x-hidden bg-primary-light`}>
      <NavBar />

      <main className="">
        <HeroSection />

        <div className="h-[90rem]"></div>
      </main>
    </div>
  );
}

export default LandingPage;
