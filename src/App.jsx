import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import NavBarProvider from './context/NavBarContext';

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <div className="overflow-hidden scroll-smooth font-nunito">
      <NavBarProvider>
        <RouterProvider router={router} />
      </NavBarProvider>
    </div>
  );
}

export default App;
