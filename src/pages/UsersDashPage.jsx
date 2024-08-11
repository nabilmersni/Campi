import UsersTable from 'src/features/users/UsersTable';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function UsersDashPage() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[85rem] flex-col gap-4">
      <TitleDash title={'Users list'} animation={'users'}>
        <InputField size="small" label={'Search Users'} isWithIcon />
      </TitleDash>

      <div className="flex w-full flex-col overflow-hidden">
        <UsersTable />
      </div>
    </div>
  );
}

export default UsersDashPage;
