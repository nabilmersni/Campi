import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import NavBar from 'src/ui/NavBar';

function LandingPage() {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <NavBar />
    </div>
  );
}

export default LandingPage;
