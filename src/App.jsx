import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import NavBarProvider from './context/NavBarContext';
import LoginForm from './features/authentication/LoginForm';

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginForm />,
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
