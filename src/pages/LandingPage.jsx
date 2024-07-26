import useScrollPositionHistory from 'src/hooks/useScrollPositionHistory';
import EventsSection from 'src/features/landingPage/EventsSection';
import HeroSection from 'src/features/landingPage/HeroSection';
import OurValuesSection from 'src/features/landingPage/OurValuesSection';
import NavBar from 'src/ui/NavBar';
import ShopSection from 'src/features/landingPage/ShopSection';
import ContactUsSection from 'src/features/landingPage/ContactUsSection';
import Footer from 'src/features/landingPage/Footer';

function LandingPage() {
  useScrollPositionHistory();
  return (
    <div className="relative min-h-[200rem] w-full overflow-hidden bg-primary-light">
      <NavBar />
      <HeroSection />
      <main className="relative mx-auto max-w-[86rem] space-y-16 p-5 sm:space-y-32">
        <OurValuesSection />
        <EventsSection />
        <ShopSection />
      </main>
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
