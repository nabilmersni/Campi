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

const confirmOrder = async (id) => {
  try {
    await updateDoc(doc(db, 'orders', id), {
      state: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrders = async () => {
  const orders = [];
  try {
    //
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMyOrders = async (id) => {
  const orders = [];
  try {
    //
    const q = query(collection(db, 'orders'), where('userID', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });

    return orders.sort((cur, acc) => acc.createdAt - cur.createdAt);
  } catch (error) {
    throw new Error(error.message);
  }
};

const orderService = { confirmOrder, getAllOrders, getMyOrders };

export default orderService;
