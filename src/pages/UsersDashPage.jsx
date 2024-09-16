import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import UsersTable from 'src/features/users/UsersTable';
import userService from 'src/services/UserService';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function UsersDashPage() {
  const [searchValue, setSearchValue] = useState('');

  const {
    isPending,
    data: users,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: userService.getAllUsers,
  });

  const filterUsers = (users, searchValue) => {
    const search = searchValue.toLowerCase();

    return users?.filter(
      (user) =>
        user.fullname.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.phoneNumber.includes(search),
    );
  };

  const filteredUsers = filterUsers(users, searchValue);

  return (
    <div className="mx-auto flex h-full w-full max-w-[85rem] flex-col gap-4">
      <TitleDash title={'Users list'} animation={'users'}>
        <InputField
          onChange={(e) => setSearchValue(e.target.value)}
          size="small"
          label={'Search Users'}
          isWithIcon
        />
      </TitleDash>

      <div className="flex w-full flex-col overflow-hidden">
        <UsersTable isPending={isPending} users={filteredUsers} />
      </div>
    </div>
  );
}

export default UsersDashPage;
