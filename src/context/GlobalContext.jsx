import DashboardProvider from './DashboardContext';
import NavBarProvider from './NavBarContext';

function GlobalContextProvider({ children }) {
  return (
    <NavBarProvider>
      <DashboardProvider>{children}</DashboardProvider>
    </NavBarProvider>
  );
}

export default GlobalContextProvider;
