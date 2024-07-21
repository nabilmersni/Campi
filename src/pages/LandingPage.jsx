import HeroSection from 'src/features/landingPage/HeroSection';
import OurValuesSection from 'src/features/landingPage/OurValuesSection';
import useScrollPositionHistory from 'src/hooks/useScrollPositionHistory';
import NavBar from 'src/ui/NavBar';

function LandingPage() {
  useScrollPositionHistory();
  return (
    <div
      className={`relative min-h-[200rem] w-full overflow-hidden bg-primary-light`}
    >
      <NavBar />

      <main className="">
        <HeroSection />
        <OurValuesSection />
      </main>
    </div>
  );
}

export default LandingPage;
