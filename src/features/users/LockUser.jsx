import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import userService from 'src/services/UserService';
import Button from 'src/ui/Button';
import Loader from 'src/ui/Loader';

function LockUser({ userID }) {
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);

  const { mutate } = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });

  const handleLockUser = async () => {
    setIsPending(true);
    try {
      await userService.lockUser(userID);
      mutate();
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
    setIsPending(false);
  };

  return (
    <>
      {isPending && <Loader />}
      <Button onClick={handleLockUser} type="iconBtn" icon={'lockUser'} />
    </>
  );
}

export default LockUser;
