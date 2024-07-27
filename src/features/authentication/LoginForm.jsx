import Lottie from 'lottie-react';
import NavBar from 'src/ui/NavBar';
import AuthAnimation from '../../assets/lottiesAnimations/authAnimation.json';
import InputField from 'src/ui/InputField';
import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';

function LoginForm() {
  return (
    <div className="min-h-[100vh] bg-primary-light">
      <div className="mx-auto max-w-[85rem] pt-[1.5rem]">
        <NavBar />

        <div className="mt-24 flex flex-col-reverse items-center justify-evenly gap-4 md:flex-row lg:px-8">
          <Lottie animationData={AuthAnimation} className="flex-1" />

          <div className="w-full flex-1 p-3 sm:max-w-[80%] md:min-w-[30rem] md:max-w-[40%]">
            <div className="flex flex-col items-center rounded-3xl border-[.2rem] border-[#ac9ee8] bg-[#F9FDFF] p-8 shadow-lg">
              <div className="mb-14 flex flex-col items-center">
                <h1 className="mb-2 text-5xl font-bold text-primary">
                  Sign in
                </h1>
                <p className="font text-md text-primary-dark">
                  Adventure starts here
                </p>

                <div className="mt-3 h-1 w-20 rounded-full bg-primary opacity-50"></div>
              </div>
              <form className="flex w-full max-w-[90%] flex-col items-center gap-5">
                <InputField
                  label={'Email'}
                  type="email"
                  placeholder={'Your email here'}
                  required
                />

                <div className="flex w-full flex-col items-end">
                  <InputField
                    label={'Password'}
                    type="password"
                    placeholder={'Your Password here'}
                    required
                  />

                  <LinkBtn type={'formLink'} to={'/'}>
                    Forgot password?
                  </LinkBtn>
                </div>

                <Button color={'primaryForm'}>Login</Button>

                <div className="mb-4 flex items-center gap-2">
                  <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
                  <span className="text-md font-semibold text-primary">or</span>
                  <div className="h-[.15rem] w-20 rounded-full bg-primary opacity-50"></div>
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <GoogleAuth>Sign in with Google</GoogleAuth>
                  <FacebookAuth>Sign in with Facebook</FacebookAuth>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-center">
                  <span className="text-nowrap">New on our platform ?</span>
                  <LinkBtn type={'formLink'} to={'/'}>
                    Create an account
                  </LinkBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
