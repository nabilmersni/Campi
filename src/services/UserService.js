import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'src/firebase';

const getAllUsers = async () => {
  const users = [];
  try {
    //
    const q = query(collection(db, 'users'), where('role', '==', 'user'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    return users.sort((cur, acc) => acc.createdAt - cur.createdAt);
  } catch (error) {
    throw new Error(error.message);
  }
};

const lockUser = async (id) => {
  try {
    await updateDoc(doc(db, 'users', id), {
      state: false,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const unlockUser = async (id) => {
  try {
    await updateDoc(doc(db, 'users', id), {
      state: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (data) => {
  try {
    await updateDoc(doc(db, 'users', data.id), {
      fullname: data.fullname,
      phoneNumber: data.phoneNumber,
      photoURL: data.photoURL,
      birthDay: Timestamp.fromDate(new Date(data.birthDay)),
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const userService = {
  getAllUsers,
  lockUser,
  unlockUser,
  updateUser,
};

export default userService;
