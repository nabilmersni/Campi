import UserSideNavBar from './UserSideNavBar';

function UserSideLayout() {
  return (
    <div className="bg-bg-light">
      <div className="mx-auto flex min-h-screen w-full max-w-[90rem] flex-col items-center p-4">
        <UserSideNavBar />
      </div>
    </div>
  );
}

export default UserSideLayout;
