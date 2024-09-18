import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ChevronIcon from 'src/assets/svgs/chevronIcon.svg';
import useClickOutside from 'src/hooks/useClickOutside';
import { AvatarDropDownVariants } from 'src/utils/FramerMotionVariants';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ProfileIcon from 'src/assets/svgs/profileIcon.svg';
import OrdersIcon from 'src/assets/svgs/ordersIcon.svg';
import ReservationIcon from 'src/assets/svgs/reservationIcon.svg';
import SettingIcon from 'src/assets/svgs/settingIcon.svg';
import SignOutIcon from 'src/assets/svgs/signOutIcon.svg';
import { logout } from 'src/features/authentication/AuthSlice';
import { NavBarContext } from 'src/context/NavBarContext';

function AvatarDropDownMenu({ img, type = 'dash', isCenter = false }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const menuRef = useClickOutside(() => setIsDropDownOpen(false));
  const { fullname, email } = currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsOpen, burgerBtnRef } = useContext(NavBarContext);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      setIsDropDownOpen(false);
      setIsOpen(false);
      burgerBtnRef.current.playSegments([98, 0], true);
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative">
      {/* toggle btn */}
      {type === 'dash' && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDownOpen((isOpen) => !isOpen);
          }}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[.1rem] border-primary p-1 transition-all hover:bg-[#474576]"
        >
          <div className="size-12 rounded-full border-[.15rem] border-primary-light">
            <img
              src={currentUser.photoURL || img}
              alt="avatar"
              className="size-full rounded-full object-cover"
            />
          </div>

          <div
            className={`w-4 fill-primary-light transition-all ${isDropDownOpen ? 'rotate-180' : ''}`}
          >
            <ChevronIcon />
          </div>
        </div>
      )}

      {type === 'userside' && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDownOpen((isOpen) => !isOpen);
          }}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[.1rem] border-primary bg-primary-light p-1 px-2 transition-all hover:bg-[#D9D2FF]"
        >
          <div className="size-12 rounded-full border-[.15rem] border-primary">
            <img
              src={currentUser.photoURL || img}
              alt="avatar"
              className="size-full rounded-full object-cover"
            />
          </div>

          <div
            className={`w-4 fill-primary-light transition-all ${isDropDownOpen ? 'rotate-180' : ''}`}
          >
            <div className="fill-primary stroke-primary stroke-[0.7px]">
              <ChevronIcon />
            </div>
          </div>
        </div>
      )}

      {/* toggle btn */}

      {/* dropdown element */}

      <AnimatePresence>
        {isDropDownOpen && (
          <motion.div
            ref={menuRef}
            variants={AvatarDropDownVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            className={`absolute z-50 w-[16rem] rounded-2xl border-[3px] border-primary bg-white p-2 py-3 shadow-md ${isCenter ? '-left-[76%] top-[4.5rem]' : 'right-0 top-[5rem]'}`}
          >
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold capitalize text-primary">
                  {fullname}
                </h2>
                <p className="text-[0.9rem]">{email}</p>
              </div>

              <div
                className={`mb-5 mt-3 h-[0.25rem] w-[35%] flex-shrink-0 rounded-full bg-bg-light`}
              ></div>

              <div className="flex w-full flex-col gap-1">
                {currentUser.role === 'user' && (
                  <Link
                    to={'/userside/profile'}
                    onClick={() => {
                      setIsDropDownOpen(false);
                      setIsOpen(false);
                      burgerBtnRef.current.playSegments([98, 0], true);
                    }}
                    className="flex h-10 w-full items-center gap-3 rounded-[0.25rem] fill-[#4e4e4e] px-2 text-[#4e4e4e] transition-all hover:bg-bg-light hover:fill-primary-dark hover:text-primary-dark"
                  >
                    <div className="w-5">
                      <ProfileIcon />
                    </div>
                    <span className="font-semibold">My profile</span>
                  </Link>
                )}

                {currentUser.role === 'admin' && (
                  <Link
                    to={'/dashboard/profile'}
                    onClick={() => {
                      setIsDropDownOpen(false);
                      setIsOpen(false);
                      burgerBtnRef.current.playSegments([98, 0], true);
                    }}
                    className="flex h-10 w-full items-center gap-3 rounded-[0.25rem] fill-[#4e4e4e] px-2 text-[#4e4e4e] transition-all hover:bg-bg-light hover:fill-primary-dark hover:text-primary-dark"
                  >
                    <div className="w-5">
                      <ProfileIcon />
                    </div>
                    <span className="font-semibold">My profile</span>
                  </Link>
                )}

                {currentUser.role === 'user' && (
                  <Link
                    to={'/userside/reservations'}
                    onClick={() => {
                      setIsDropDownOpen(false);
                      setIsOpen(false);
                      burgerBtnRef.current.playSegments([98, 0], true);
                    }}
                    className="flex h-10 w-full items-center gap-3 rounded-[0.25rem] fill-[#4e4e4e] px-2 text-[#4e4e4e] transition-all hover:bg-bg-light hover:fill-primary-dark hover:text-primary-dark"
                  >
                    <div className="w-5">
                      <ReservationIcon />
                    </div>
                    <span className="-ml-1 font-semibold">Reservation</span>
                  </Link>
                )}

                {currentUser.role === 'user' && (
                  <Link
                    to={'/userside/orders'}
                    onClick={() => {
                      setIsDropDownOpen(false);
                      setIsOpen(false);
                      burgerBtnRef.current.playSegments([98, 0], true);
                    }}
                    className="flex h-10 w-full items-center gap-3 rounded-[0.25rem] fill-[#4e4e4e] px-2 text-[#4e4e4e] transition-all hover:bg-bg-light hover:fill-primary-dark hover:text-primary-dark"
                  >
                    <div className="w-6">
                      <OrdersIcon />
                    </div>
                    <span className="-ml-1 font-semibold">Oders</span>
                  </Link>
                )}

                <Link
                  to={'#'}
                  onClick={() => setIsDropDownOpen(false)}
                  className="flex h-10 w-full items-center gap-3 rounded-[0.25rem] fill-[#4e4e4e] px-2 text-[#4e4e4e] transition-all hover:bg-bg-light hover:fill-primary-dark hover:text-primary-dark"
                >
                  <div className="w-5">
                    <SettingIcon />
                  </div>
                  <span className="font-semibold">Settings</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex h-10 w-full items-center gap-3 rounded-[0.25rem] fill-[#ff4c4c] px-2 text-[#ff4c4c] transition-all hover:bg-red-50 hover:fill-[#ff3a3a] hover:text-[#ff3a3a]"
                >
                  <div className="w-5">
                    <SignOutIcon />
                  </div>
                  <span className="font-semibold">Sign out</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* dropdown element */}
    </div>
  );
}

export default AvatarDropDownMenu;
