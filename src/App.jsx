import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginForm from './features/authentication/LoginForm';
import AuthFormLayout from './features/authentication/AuthFormLayout';
import RegisterForm from './features/authentication/RegisterForm';
import DashboardLayout from './features/dashboard/DashboardLayout';
import GlobalContextProvider from './context/GlobalContext';

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

  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
]);

function App() {
  return (
    <div className="overflow-hidden scroll-smooth font-nunito">
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
