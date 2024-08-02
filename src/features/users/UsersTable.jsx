import { TablePagination } from '@mui/material';
import { useState } from 'react';
import UpdateUser from './UpdateUser';
import LockUser from './LockUser';
import UnlockUser from './UnlockUser';
const data = [
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: false,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
  {
    name: 'Nabil Mersni',
    email: 'nabil@gmail.com',
    phone: '41156289',
    state: true,
  },
];

function UsersTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="mt-4 w-full flex-grow overflow-hidden">
      <div className="grid h-full w-full grid-cols-5 gap-y-4 overflow-x-auto rounded-2xl border-[.2rem] border-primary pb-4">
        {/* Header Row */}
        <div className="col-span-5 grid min-w-[57rem] grid-cols-5 rounded-t-xl border-b-8 border-primary-light bg-primary px-4 text-white-light">
          <div className="border-primary-light p-4 pl-7 font-bold">Name</div>
          <div className="border-primary-light p-4 px-3 font-bold">Email</div>
          <div className="border-primary-light p-4 px-2 font-bold">Phone</div>
          <div className="border-primary-light p-4 px-2 font-bold">State</div>
          <div className="border-primary-light p-4 px-1 font-bold">Action</div>
        </div>
        {/* Header Row */}

        {/* Data Rows Wrapper */}
        <div
          className="col-span-5 min-w-[57rem] overflow-y-auto"
          // style={{ maxHeight: 'calc(100vh - 21.5rem)' }}
        >
          {data.map((row, index) => (
            <div
              key={index}
              className="mx-4 mb-4 grid grid-cols-5 rounded-2xl border-4 border-[#dcd5ff] bg-[#f5f1f6] shadow-md"
            >
              <div className="flex items-center gap-2 border-primary-light p-3">
                <div className="size-12 rounded-full border-[.15rem] border-primary-light">
                  <img
                    src={'/img/avatar.png'}
                    alt="avatar"
                    className="size-full rounded-full object-cover"
                  />
                </div>
                <span>{row.name}</span>
              </div>
              <div className="my-auto p-3">{row.email}</div>
              <div className="my-auto p-3">{row.phone}</div>
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
                <LockUser />
                {/* <UnlockUser /> */}
                <UpdateUser />
              </div>
            </div>
          ))}

          <div className="mt-8 flex justify-center px-4">
            <TablePagination
              className="rounded-xl border-[.2rem] border-[#dcd5ff] bg-white-light"
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
        {/* Data Rows */}
      </div>
    </div>
  );
}

export default UsersTable;
