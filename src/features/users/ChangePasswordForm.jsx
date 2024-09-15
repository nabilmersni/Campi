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
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    // try {
    //   await authService.register(data);

    //   toast.success('Account created! Check your inbox to verify your email.');
    //   navigate('/login');
    // } catch (error) {
    //   console.log(error.message);
    //   ToastErrorMsg(error.message);
    // }

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

      <div className="mt-10 flex flex-col items-center gap-4 overflow-hidden overflow-y-auto pr-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-5"
          noValidate
        >
          <InputField
            label={'Full name'}
            name={'fullname'}
            type="text"
            placeholder={'Your fullname here'}
            required
            register={register('fullname', {
              required: 'Full name is required.',
              minLength: {
                value: 3,
                message: 'Full name must be at least 3 characters long!',
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Full name can only contain letters.',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.fullname?.message}
          </p>

          <InputField
            label={'Email'}
            name={'email'}
            type="email"
            placeholder={'Your email here'}
            required
            register={register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email!',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.email?.message}
          </p>

          <InputField
            label={'Phone number'}
            name={'phoneNumber'}
            type="tel"
            placeholder={'Your phone num here'}
            required
            register={register('phoneNumber', {
              required: 'Phone number is required.',
              pattern: {
                value:
                  /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: 'Please enter a valid phone number!',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.phoneNumber?.message}
          </p>

          <InputField
            label={'Date of Birth'}
            name={'birthDay'}
            type="date"
            placeholder={'dd/mm/yyyy'}
            required
            shrink
            register={register('birthDay', {
              required: 'Date of birth is required',
              validate: {
                isAtLeastTwelveYearsOld: (value) => {
                  if (!value) return true; // Skip validation if no value
                  const age = calculateAge(value);
                  return age >= 12 || 'You must be at least 12 years old';
                },
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.birthDay?.message}
          </p>

          <div className="mb-4 flex w-full items-start justify-between gap-2">
            <div>
              <InputField
                label={'Password'}
                name={'password'}
                type="password"
                required
                register={register('password', {
                  required: 'password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters.',
                  },
                })}
                onChange={handleInputChange}
              />
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.password?.message}
              </p>
            </div>

            <div>
              <InputField
                label={'Confirm Password'}
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
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.rePassword?.message}
              </p>
            </div>
          </div>

          <Button color={'primaryForm'}>Change password</Button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
