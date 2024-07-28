import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import NavBarProvider from './context/NavBarContext';
import LoginForm from './features/authentication/LoginForm';
import AuthFormLayout from './features/authentication/AuthFormLayout';
import RegisterForm from './features/authentication/RegisterForm';

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
  {
    element: <AuthFormLayout />,
    children: [
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/signup',
        element: <RegisterForm />,
      },
    ],
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
