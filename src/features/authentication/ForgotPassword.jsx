import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authService from 'src/services/AuthService';
import Button from 'src/ui/Button';
import InputField from 'src/ui/InputField';
import LinkBtn from 'src/ui/LinkBtn';
import Loader from 'src/ui/Loader';
import { ToastErrorMsg } from 'src/utils/ToastErrorMsg';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await authService.fogotPassword(data);
      toast.success('Password reset email has been sent to you.');
      navigate('/login');
    } catch (error) {
      ToastErrorMsg(error.message);
    }
    setLoading(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  return (
    <div className="w-full flex-1 p-3 sm:max-w-[80%] md:min-w-[32rem] md:max-w-[40%]">
      {loading && <Loader />}

      <div className="flex flex-col items-center rounded-3xl border-[.2rem] border-[#ac9ee8] bg-[#F9FDFF] p-6 px-4 shadow-lg sm:p-8">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="mb-2 text-5xl font-bold text-primary">
            Forgot password
          </h1>
          <p className="font text-md text-primary-dark">
            Adventure starts here
          </p>

          <div className="mt-3 h-1 w-20 rounded-full bg-primary opacity-50"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-5"
          noValidate
        >
          <InputField
            label={'Email'}
            type="email"
            name={'email'}
            placeholder={'Your email here'}
            required
            register={{
              ...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email!',
                },
              }),
            }}
            onChange={handleInputChange}
          />

          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.email?.message}
          </p>

          <Button color={'primaryForm'}>
            <span className="font-semibold">Reset Passsword</span>
          </Button>

          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-center">
            <LinkBtn type={'formLink'} to={'/login'}>
              Back to login
            </LinkBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
