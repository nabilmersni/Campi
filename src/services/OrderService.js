import {
  collection,
  doc,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
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

const totalOrderCount = async () => {
  try {
    const coll = collection(db, 'orders');
    const q = query(coll, where('state', '==', true));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMyOrdersCount = async (id) => {
  try {
    const coll = collection(db, 'orders');
    const q = query(
      coll,
      where('state', '==', true),
      where('userID', '==', id),
    );
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  } catch (error) {
    throw new Error(error.message);
  }
};

const orderService = {
  confirmOrder,
  getAllOrders,
  getMyOrders,
  totalOrderCount,
  getMyOrdersCount,
};

export default orderService;
