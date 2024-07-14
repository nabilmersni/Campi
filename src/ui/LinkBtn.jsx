import { NavLink } from 'react-router-dom';

function LinkBtn({ to, children }) {
  return (
    <li>
      <NavLink to={to} className="px-4 py-2">
        {children}
      </NavLink>
    </li>
  );
}

export default LinkBtn;
