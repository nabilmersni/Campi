import InputField from 'src/ui/InputField';
import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';

function RegisterForm() {
  return (
    <div className="w-full flex-1 p-3 sm:max-w-[80%] md:min-w-[35rem] md:max-w-[40%]">
      <div className="flex flex-col items-center rounded-3xl border-[.2rem] border-[#ac9ee8] bg-[#F9FDFF] p-6 px-4 shadow-lg sm:p-8">
        <div className="mb-14 flex flex-col items-center">
          <h1 className="mb-2 text-5xl font-bold text-primary">Sign Up</h1>
          <p className="font text-md text-primary-dark">
            Adventure starts here
          </p>

          <div className="mt-3 h-1 w-20 rounded-full bg-primary opacity-50"></div>
        </div>
        <form className="flex w-full flex-col items-center gap-5">
          <InputField
            label={'FullName'}
            type="text"
            placeholder={'Your fullname here'}
            required
          />

          <InputField
            label={'Date of Birth'}
            type="date"
            placeholder={'Your email here'}
            required
            shrink
          />

          <InputField
            label={'Email'}
            type="email"
            placeholder={'Your email here'}
            required
          />

          <div className="mb-4 flex w-full items-center justify-between gap-2">
            <InputField label={'Password'} type="password" required />

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
