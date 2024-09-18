import UserItem from './UserItem';
import Loader from 'src/ui/Loader';

function UsersTable({ isPending, users }) {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <div className="mt-4 w-full flex-grow overflow-hidden">
      {isPending && <Loader />}
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
          {users?.map((row) => (
            <UserItem key={row.uid} row={row} />
          ))}

          {/* <div className="mt-8 flex justify-center px-4">
            <TablePagination
              className="rounded-xl border-[.2rem] border-[#dcd5ff] bg-white-light"
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div> */}
        </div>
        {/* Data Rows */}
      </div>
    </div>
  );
}

export default UsersTable;
