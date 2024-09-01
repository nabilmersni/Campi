import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from 'src/firebase';
const provider = new GoogleAuthProvider();

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
        birthDay: Timestamp.fromDate(new Date(data.birthDay)),
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

const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error('Sign out failed. Please try again.');
  }
};

const fogotPassword = async (data) => {
  try {
    await sendPasswordResetEmail(auth, data.email);
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

const signInWithGmail = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;

    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.data()) {
      await auth.signOut();
      await deleteUser(user);
      throw new Error('No account linked with this email.');
    }

    // console.log(user);
    // console.log(docSnap.data());

    return docSnap.data();
  } catch (error) {
    throw new Error(error.message);
  }
};

const authService = {
  register,
  login,
  logout,
  fogotPassword,
  signInWithGmail,
};

export default authService;
