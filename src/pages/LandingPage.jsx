import useScrollPositionHistory from 'src/hooks/useScrollPositionHistory';
import NavBar from 'src/ui/NavBar';

function LandingPage() {
  useScrollPositionHistory();
  return (
    <div className={`relative w-full overflow-x-hidden`}>
      <NavBar />

      <div className="h-[900rem] pt-[5rem]">hello</div>
    </div>
  );
}

export default LandingPage;
