import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const PrivateRoute = ({ children, role }) => {
  const { currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      return navigate('/login', {
        state: { error: 'Not authenticated. Please log in.' },
      });
    }

    if (currentUser.role !== role) {
      switch (currentUser.role) {
        case 'admin':
          return navigate('/dashboard', {
            state: { error: 'Access denied: Route not allowed.' },
          });

        case 'user':
          return navigate('/userside', {
            state: { error: 'Access denied: Route not allowed.' },
          });

        default:
          break;
      }
    }
  }, [currentUser, navigate, role]);

  if (currentUser.role === role) {
    return <>{children}</>;
  }

  return null;
};

const PublicRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      switch (currentUser.role) {
        case 'admin':
          return navigate('/dashboard');

        case 'user':
          return navigate('/userside');

        default:
          break;
      }
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return <>{children}</>;
  }
};

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '',
      element: (
        <PublicRoute>
          <LandingPage />
        </PublicRoute>
      ),
    },
    {
      element: (
        <PublicRoute>
          <AuthFormLayout />
        </PublicRoute>
      ),
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
      element: (
        <PrivateRoute role={'admin'}>
          <DashboardLayout />
        </PrivateRoute>
      ),

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
              element: (
                <PrivateRoute role={'user'}>
                  <CartAddressPage />
                </PrivateRoute>
              ),
            },
            {
              path: 'payment',
              element: (
                <PrivateRoute role={'user'}>
                  <CartPaymentPage />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
