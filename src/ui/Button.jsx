import UpdateUserIcon from 'src/assets/svgs/editUser.svg';
import LockIcon from 'src/assets/svgs/lockUser.svg';
import UnlockIcon from 'src/assets/svgs/unlockUser.svg';
import ViewIcon from 'src/assets/svgs/view.svg';
import UpdateIcon from 'src/assets/svgs/edit.svg';
import DeleteIcon from 'src/assets/svgs/delete.svg';

function Button({
  color = 'primary',
  children,
  size = 1,
  onClick,
  type = 'primary',
  icon,
}) {
  const sizeVariants = {
    1: 'px-[1.2rem] py-[.6rem] text-[1rem] ',
    2: 'px-[1.8rem] py-[.8rem] text-[1.1rem]',
    3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
  };

  const colorVariants = {
    primary: 'bg-[#8b7bcb] text-white hover:bg-primary rounded-full',
    primaryForm: 'bg-[#8b7bcb] text-white hover:bg-primary rounded-md w-full',
  };

  if (type === 'primary') {
    return (
      <button
        className={` ${sizeVariants[size]} ${colorVariants[color]} text-center font-bold transition-all`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === 'googleBtn') {
    return (
      <button
        onClick={onClick}
        type="button"
        aria-label="Sign in with Google"
        className="flex w-full items-center gap-3 rounded-md bg-google-button-blue p-0.5 pr-3 transition-colors duration-300 hover:bg-google-button-blue-hover"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-l bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <title>Sign in with Google</title>
            <desc>Google G Logo</desc>
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              className="fill-google-logo-blue"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              className="fill-google-logo-green"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              className="fill-google-logo-yellow"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              className="fill-google-logo-red"
            ></path>
          </svg>
        </div>
        <span className="text-sm tracking-wider text-white">{children}</span>
      </button>
    );
  }

  if (type === 'iconBtn') {
    return (
      <button
        onClick={onClick}
        className={`size-10 rounded-full p-[.2rem] transition-all ${icon === 'lockUser' || icon === 'delete' ? 'bg-red-200 fill-[#f00] hover:bg-red-300' : icon === 'unlockUser' ? 'bg-green-200 fill-[#259f1a] hover:bg-green-300' : 'bg-primary-light fill-primary hover:bg-[#d6ceff]'} `}
        title={icon}
      >
        {icon === 'updateUser' && <UpdateUserIcon />}
        {icon === 'lockUser' && <LockIcon />}
        {icon === 'unlockUser' && <UnlockIcon />}
        {icon === 'view' && <ViewIcon />}
        {icon === 'update' && <UpdateIcon />}
        {icon === 'delete' && <DeleteIcon />}
      </button>
    );
  }

  if (type === 'formLink') {
    const sizeVarinats = {
      1: 'px-[1.2rem] py-[.6rem] text-[1rem] ',
      2: 'px-[1.8rem] py-[.8rem] text-[1.1rem]',
      3: 'px-[4.5rem] py-[1.8rem] text-[3rem]',
    };

    return (
      <button
        type="button"
        className={`rounded-full ${sizeVarinats[size]} text-nowrap text-center font-semibold text-[#8b7bcb] transition-all hover:text-primary`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
