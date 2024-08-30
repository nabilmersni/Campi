import { toast } from 'react-toastify';

export function AuthErrorToastMsg(errorMessage) {
  switch (errorMessage) {
    case 'Firebase: Error (auth/invalid-credential).':
      toast.error('Wrong email or password!');
      break;

    case 'Firebase: Error (auth/network-request-failed).':
      toast.error('Please verify your internet connection');
      break;

    case 'Firebase: Error (auth/email-already-in-use).':
      toast.error('Email already in use. Please use a different email.');
      break;

    case 'Firebase: Error (auth/missing-email).':
      toast.error('Invalid email address. Please enter a valid email.');
      break;

    default:
      toast.error(errorMessage);
      break;
  }
}
