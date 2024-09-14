import LockUser from './LockUser';
import UnlockUser from './UnlockUser';
import UpdateUser from './UpdateUser';

function UserItem({ row }) {
  return (
    <div className="mx-4 mb-4 grid grid-cols-5 rounded-2xl border-4 border-[#dcd5ff] bg-[#f5f1f6] shadow-md">
      <div className="flex items-center gap-2 border-primary-light p-3">
        <div className="size-12 rounded-full border-[.15rem] border-primary-light">
          <img
            src={row.photoURL || '/img/avatar.png'}
            alt="avatar"
            className="size-full rounded-full object-cover"
          />
        </div>
        <span>{row.fullname}</span>
      </div>
      <div className="my-auto p-3">{row.email}</div>
      <div className="my-auto p-3">{row.phoneNumber}</div>
      <div className="my-auto p-3">
        {row.state ? (
          <span className="rounded-full bg-green-300 p-2 px-4 font-semibold text-primary-dark">
            active
          </span>
        ) : (
          <span className="rounded-full bg-red-300 p-2 px-4 font-semibold text-primary-dark">
            unactive
          </span>
        )}
      </div>
      <div className="my-auto flex h-full items-center gap-3 p-4">
        {row.state ? (
          <LockUser userID={row.uid} />
        ) : (
          <UnlockUser userID={row.uid} />
        )}

        <UpdateUser user={row} />
      </div>
    </div>
  );
}

export default UserItem;
