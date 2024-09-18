import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
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

    const updatedDoc = await getDoc(doc(db, 'users', data.id));

    if (updatedDoc.exists()) {
      return updatedDoc.data();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const totalUserCount = async () => {
  try {
    const coll = collection(db, 'users');
    const q = query(coll, where('role', '==', 'user'));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  } catch (error) {
    throw new Error(error.message);
  }
};

const userService = {
  getAllUsers,
  lockUser,
  unlockUser,
  updateUser,
  totalUserCount,
};

export default userService;
