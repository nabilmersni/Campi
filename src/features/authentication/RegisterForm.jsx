import { useState } from 'react';
import { useForm } from 'react-hook-form';

import InputField from 'src/ui/InputField';
import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';
import authService from 'src/services/AuthService';
import Loader from 'src/ui/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthErrorToastMsg } from 'src/utils/AuthErrorToastMsg';

function RegisterForm() {
  const { register, handleSubmit } = useForm();
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
      AuthErrorToastMsg(error.message);
    }

    setLoading(false);
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
        >
          <InputField
            label={'FullName'}
            type="text"
            placeholder={'Your fullname here'}
            required
            register={register('fullname')}
          />

          <InputField
            label={'Email'}
            type="email"
            placeholder={'Your email here'}
            required
            register={register('email')}
          />

          <InputField
            label={'Phone number'}
            type="tel"
            placeholder={'Your phone num here'}
            required
            register={register('phoneNumber')}
          />

          <InputField
            label={'Date of Birth'}
            type="date"
            placeholder={'dd/mm/yyyy'}
            required
            shrink
            register={register('BirthDay')}
          />

          <div className="mb-4 flex w-full items-center justify-between gap-2">
            <InputField
              label={'Password'}
              type="password"
              required
              register={register('password')}
            />

            <InputField label={'Confirm Password'} type="password" required />
          </div>

          <Button color={'primaryForm'}>Sign Up</Button>

          <div className="my-3 flex items-center gap-2">
            <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
            <span className="text-md font-semibold text-primary">or</span>
            <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <GoogleAuth>Sign Up with Google</GoogleAuth>
            <FacebookAuth>Sign Up with Facebook</FacebookAuth>
          </div>

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
