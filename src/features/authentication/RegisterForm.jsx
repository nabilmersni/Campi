import { useState } from 'react';
import { useForm } from 'react-hook-form';

import InputField from 'src/ui/InputField';
import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';
import authService from 'src/services/AuthService';
import Loader from 'src/ui/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ToastErrorMsg } from 'src/utils/ToastErrorMsg';
import { calculateAge } from 'src/utils/UtilsFunctions';

function RegisterForm() {
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
    try {
      await authService.register(data);

      toast.success('Account created! Check your inbox to verify your email.');
      navigate('/login');
    } catch (error) {
      console.log(error.message);
      ToastErrorMsg(error.message);
    }

    setLoading(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  return (
    <div className="w-full flex-1 p-3 sm:max-w-[80%] md:min-w-[35rem] md:max-w-[40%]">
      {loading && <Loader />}

      <div className="flex flex-col items-center rounded-3xl border-[.2rem] border-[#ac9ee8] bg-[#F9FDFF] p-6 px-4 shadow-lg sm:p-8">
        <div className="mb-14 flex flex-col items-center">
          <h1 className="mb-2 text-5xl font-bold text-primary">Sign Up</h1>
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

          <Button color={'primaryForm'}>Sign Up</Button>

          {/* <div className="my-3 flex items-center gap-2">
            <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
            <span className="text-md font-semibold text-primary">or</span>
            <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
          </div> */}

          {/* <div className="flex w-full flex-col items-center justify-center gap-2">
            <GoogleAuth>Sign Up with Google</GoogleAuth>
            <FacebookAuth>Sign Up with Facebook</FacebookAuth>
          </div> */}

          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-center">
            <span className="text-nowrap">Already have an account ?</span>
            <LinkBtn type={'formLink'} to={'/login'}>
              Sign in instead
            </LinkBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
