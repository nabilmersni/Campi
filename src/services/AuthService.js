import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from 'src/firebase';

const register = async (data) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    const { uid } = res.user;

    try {
      await setDoc(doc(db, 'users', uid), {
        uid,
        fullname: data.fullname,
        email: data.email,
        phoneNumber: data.phoneNumber,
        role: 'user',
        state: true,
        photoURL: null,
      });
    } catch (error) {
      await deleteUser(res.user);
    }

    await sendVerificationEmail();
  } catch (error) {
    throw new Error(error.message);
  }
};

const login = async (data) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    if (!res.user.emailVerified) {
      console.log(auth.currentUser);
      await sendVerificationEmail();
      throw new Error('Email not verified. Please check your inbox to verify.');
    }

    const docRef = doc(db, 'users', res.user.uid);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (error) {
    throw new Error(error.message);
  }
};

const sendVerificationEmail = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
  } catch (error) {
    throw new Error('Failed to send verification email. Please try again.');
  }
};

const authService = {
  register,
  login,
};

export default authService;
