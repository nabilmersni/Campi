import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { login } from './AuthSlice';
import InputField from 'src/ui/InputField';
import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';
import GoogleAuth from './GoogleAuth';
import Loader from 'src/ui/Loader';

function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  return (
    <div className="w-full flex-1 p-3 sm:max-w-[80%] md:min-w-[32rem] md:max-w-[40%]">
      {loading && <Loader />}

      <div className="flex flex-col items-center rounded-3xl border-[.2rem] border-[#ac9ee8] bg-[#F9FDFF] p-6 px-4 shadow-lg sm:p-8">
        <div className="mb-14 flex flex-col items-center">
          <h1 className="mb-2 text-5xl font-bold text-primary">Sign in</h1>
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

          <div className="flex w-full flex-col items-end gap-1">
            <InputField
              label={'Password'}
              type="password"
              name={'password'}
              placeholder={'Your Password here'}
              required
              register={{
                ...register('password', {
                  required: 'password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters.',
                  },
                }),
              }}
              onChange={handleInputChange}
            />
            <div className="flex w-full items-center justify-between">
              <p className="mt- self-start text-sm text-red-400">
                {errors.password?.message}
              </p>

              <LinkBtn type={'formLink'} to={'/forgotpassword'}>
                Forgot password?
              </LinkBtn>
            </div>
          </div>
          <Button color={'primaryForm'}>Login</Button>
          <div className="my-2 flex items-center gap-2">
            <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
            <span className="text-md font-semibold text-primary">or</span>
            <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <GoogleAuth>Sign in with Google</GoogleAuth>
            {/* <FacebookAuth>Sign in with Facebook</FacebookAuth> */}
          </div>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-center">
            <span className="text-nowrap">New on our platform ?</span>
            <LinkBtn type={'formLink'} to={'/signup'}>
              Create an account
            </LinkBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
