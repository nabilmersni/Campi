import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import InputField from 'src/ui/InputField';
import Button from 'src/ui/Button';

import authService from 'src/services/AuthService';
import Loader from 'src/ui/Loader';
import { ToastErrorMsg } from 'src/utils/ToastErrorMsg';
import { calculateAge } from 'src/utils/UtilsFunctions';

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await authService.changePassword(data);
      toast.success('Password changed successfully');
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error('Wrong password!');
    }

    setLoading(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  return (
    <div className="relative flex h-full flex-col">
      {loading && <Loader />}
      <h1 className="text-2xl font-semibold text-primary">Change password</h1>

      <div className="flex flex-col items-center gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex w-full flex-col items-center gap-5"
          noValidate
        >
          <InputField
            label={'Old Password'}
            name={'oldPassword'}
            type="password"
            required
            register={register('oldPassword', {
              required: 'Old Password is required',
              minLength: {
                value: 8,
                message: 'Old Password must be at least 8 characters.',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.oldPassword?.message}
          </p>

          <InputField
            label={'New Password'}
            name={'password'}
            type="password"
            required
            register={register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters.',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.password?.message}
          </p>

          <InputField
            label={'Confirm New Password'}
            name={'rePassword'}
            type="password"
            required
            register={register('rePassword', {
              required: 'Confirm password is required',
              validate: (rePassword) => {
                const password = getValues('password');
                return rePassword === password || 'Passwords should match!';
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.rePassword?.message}
          </p>

          <Button color={'primaryForm'}>Change password</Button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
