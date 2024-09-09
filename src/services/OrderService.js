import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
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
  const events = [];
  try {
    //
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      events.push(doc.data());
    });

    return events;
  } catch (error) {
    throw new Error(error.message);
  }
};

const orderService = { confirmOrder, getAllOrders };

export default orderService;
