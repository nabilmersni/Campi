import { motion, useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRef } from 'react';
import Title from 'src/ui/Title';
import plantAnimation from '../../assets/lottiesAnimations/trees.json';
import EventItemCard from '../events/EventItemCard';
import LinkBtn from 'src/ui/LinkBtn';
import EventList from '../events/EventList';

function EventsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      id="events"
      className="relative flex flex-col items-center"
      ref={sectionRef}
    >
      <div className="relative z-10 flex flex-col items-center">
        <Title>Events</Title>
        <p className="mx-auto max-w-[36rem] text-center text-lg text-black-light">
          Campi offers a variety of exciting events that bring together campers
          to explore nature, learn new skills, and create unforgettable
          memories.
        </p>
        <div className="mx-auto my-5 h-1 w-20 rounded-full bg-primary opacity-50"></div>

        <EventList type={'landingPage'} />

        <LinkBtn type={'primary'} size={2}>
          View all
        </LinkBtn>
      </div>

      {/* animations */}
      <motion.div
        className="absolute left-0 top-[0rem] z-0 lg:top-[-3rem]"
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? -100 : -400,
          transition: { duration: 0.3, type: 'spring', damping: 12 },
        }}
        viewport={{ once: false }}
      >
        <Lottie
          animationData={plantAnimation}
          loop={true}
          autoPlay={true}
          className="w-[9rem] opacity-30 md:w-[10rem] lg:w-[15rem]"
        />
      </motion.div>

      <motion.div
        className="absolute right-0 top-[0rem] lg:top-[-3rem]"
        initial={{ opacity: 0, x: 200 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 100 : 400,
          transition: { duration: 0.3, type: 'spring', damping: 12 },
        }}
      >
        <Lottie
          animationData={plantAnimation}
          loop={true}
          autoPlay={true}
          className="w-[9rem] scale-x-[-1] opacity-30 md:w-[10rem] lg:w-[15rem]"
        />
      </motion.div>
      {/* animations */}
    </section>
  );
}

export default EventsSection;
