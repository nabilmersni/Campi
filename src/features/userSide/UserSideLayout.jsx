import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserSideNavBar from './UserSideNavBar';
import { useSelector } from 'react-redux';
import Loader from 'src/ui/Loader';

function UserSideLayout() {
  const location = useLocation();
  const { error } = location.state || {};
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(error);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [error, navigate, location.pathname]);

  return (
    <div className="bg-bg-light">
      {loading && <Loader />}

      <div className="mx-auto flex min-h-screen w-full max-w-[90rem] flex-col items-center p-4">
        <UserSideNavBar />

        <div className="mt-[6rem] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserSideLayout;
