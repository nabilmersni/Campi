import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthFormLayout from './features/authentication/AuthFormLayout';
import LoginForm from './features/authentication/LoginForm';
import RegisterForm from './features/authentication/RegisterForm';
import DashboardLayout from './features/dashboard/DashboardLayout';
import LandingPage from './pages/LandingPage';
import UsersDashPage from './pages/UsersDashPage';
import DashHomePage from './features/dashboard/DashHomePage';
import EventsDashPage from './pages/EventsDashPage';
import ShopDashPage from './pages/ShopDashPage';
import UserSideLayout from './features/userSide/UserSideLayout';
import HomeUserSidePage from './pages/HomeUserSidePage';
import EventsUserSidePage from './pages/EventsUserSidePage';
import ShopUserSidePage from './pages/ShopUserSidePage';
import CartDetailPage from './pages/CartDetailPage';
import CartAddressPage from './pages/CartAddressPage';
import CartPaymentPage from './pages/CartPaymentPage';
import EventDetailsPage from './pages/EventDetailsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

export default function AppRouter() {
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

      children: [
        {
          index: true,
          element: <DashHomePage />,
        },
        {
          path: 'users',
          element: <UsersDashPage />,
        },
        {
          path: 'events',
          element: <EventsDashPage />,
        },
        {
          path: 'shop',
          element: <ShopDashPage />,
        },
      ],
    },
    {
      path: '/userside',
      element: <UserSideLayout />,

      children: [
        {
          index: true,
          element: <HomeUserSidePage />,
        },

        {
          path: 'events',
          element: <EventsUserSidePage />,
        },

        {
          path: 'events/:id',
          element: <EventDetailsPage />,
        },

        {
          path: 'shop',
          element: <ShopUserSidePage />,
        },

        {
          path: 'shop/:id',
          element: <ProductDetailsPage />,
        },

        {
          path: 'cart',
          children: [
            {
              index: true,
              element: <CartDetailPage />,
            },
            {
              path: 'address',
              element: <CartAddressPage />,
            },
            {
              path: 'payment',
              element: <CartPaymentPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
