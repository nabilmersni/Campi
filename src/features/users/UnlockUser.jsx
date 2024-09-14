import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import userService from 'src/services/UserService';
import Button from 'src/ui/Button';
import Loader from 'src/ui/Loader';

function UnlockUser({ userID }) {
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

  const handleUnlockUser = async () => {
    setIsPending(true);
    try {
      await userService.unlockUser(userID);
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

      <Button onClick={handleUnlockUser} type="iconBtn" icon={'unlockUser'} />
    </>
  );
}

export default UnlockUser;
