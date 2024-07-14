import { NavLink } from 'react-router-dom';
import LinkBtn from './LinkBtn';

function NavBar() {
  return (
    <nav className="bg-primary-dark">
      <div className="flex items-center justify-between px-10 py-4">
        <NavLink to={'/'}>
          <img className="w-12 lg:w-14" src="img/navLogo.svg" alt="" />
        </NavLink>

        <ul>
          <LinkBtn to={'/'}>hello</LinkBtn>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
