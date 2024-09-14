import Button from 'src/ui/Button';
import FormModal from 'src/ui/FormModal';
import { useState } from 'react';
import UpdateUserForm from './UpdateUserForm';

function UpdateUser({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Button onClick={handleToggleModal} type="iconBtn" icon={'updateUser'} />

      <FormModal isOpen={isOpen} handleToggleModal={handleToggleModal}>
        <UpdateUserForm user={user} handleToggleModal={handleToggleModal} />
      </FormModal>
    </>
  );
}

export default UpdateUser;
