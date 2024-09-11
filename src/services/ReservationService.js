import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'src/firebase';

const confirmRes = async (id) => {
  try {
    await updateDoc(doc(db, 'reservations', id), {
      state: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllRes = async () => {
  const reservations = [];
  try {
    //
    const q = query(
      collection(db, 'reservations'),
      orderBy('createdAt', 'desc'),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reservations.push(doc.data());
    });

    return reservations;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMyRes = async (id) => {
  const reservations = [];
  try {
    //
    const q = query(collection(db, 'reservations'), where('userID', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reservations.push(doc.data());
    });

    return reservations.sort((cur, acc) => acc.createdAt - cur.createdAt);
  } catch (error) {
    throw new Error(error.message);
  }
};

const reservationService = { confirmRes, getAllRes, getMyRes };

export default reservationService;
