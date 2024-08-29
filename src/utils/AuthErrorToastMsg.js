import { toast } from "react-toastify";

export function AuthErrorToastMsg(errorMessage) {
  switch (errorMessage) {
    case 'Firebase: Error (auth/invalid-credential).':
      toast.error('Wrong email or password!');
      break;
    case 'Firebase: Error (auth/network-request-failed).':
      toast.error('Please verify your internet connection');
      break;

    default:
      toast.error(errorMessage);
      break;
  }
}
