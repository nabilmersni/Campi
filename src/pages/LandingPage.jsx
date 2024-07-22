import useScrollPositionHistory from 'src/hooks/useScrollPositionHistory';
import EventsSection from 'src/features/landingPage/EventsSection';
import HeroSection from 'src/features/landingPage/HeroSection';
import OurValuesSection from 'src/features/landingPage/OurValuesSection';
import NavBar from 'src/ui/NavBar';

function LandingPage() {
  useScrollPositionHistory();
  return (
    <div className="relative min-h-[200rem] w-full overflow-hidden bg-primary-light">
      <NavBar />
      <HeroSection />
      <main className="relative mx-auto max-w-[86rem] space-y-32 p-5">
        <OurValuesSection />
        <EventsSection />
      </main>
    </div>
  );
}

export default LandingPage;
