import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colapsedShapeVars } from 'src/utils/FramerMotionVariants';

function Logo() {
  return (
    <div className="relative mr-auto flex items-center justify-center">
      <NavLink to={'/'} className="relative">
        <svg
          className="fill relative z-20 w-8 fill-white lg:w-9"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 56"
        >
          <path
            id="logo"
            d="M68,61.86H63.07L43.82,26.57l3.54-6.49a2.038,2.038,0,0,0-3.58-1.95L41.5,22.32l-2.28-4.19a2.038,2.038,0,1,0-3.58,1.95l3.54,6.49L19.93,61.86H15a2.035,2.035,0,0,0,0,4.07H68a2.035,2.035,0,1,0,0-4.07Zm-20.35,0H35.39V53.71a6.11,6.11,0,0,1,12.22,0Z"
            transform="translate(-12.965 -17.066)"
            //   fill="#7262af"
          />
        </svg>
        <motion.div
          className="absolute left-6 top-0 z-10 size-9 rounded-full bg-primary lg:size-10"
          animate={'show'}
          variants={colapsedShapeVars}
        ></motion.div>
      </NavLink>
    </div>
  );
}

export default Logo;
