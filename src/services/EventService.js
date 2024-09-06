import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { db } from 'src/firebase';
import { v4 as uuidv4 } from 'uuid';

const addEvent = async (data) => {
  try {
    const id = uuidv4();
    await setDoc(doc(db, 'events', id), {
      id,
      title: data.title,
      price: Number(data.price),
      state: data.state[0],
      description: data.description,
      createdAt: new Date().toLocaleDateString('en-GB'),

      photoURLs: data.photoURLs,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllEvents = async () => {
  const events = [];
  try {
    //
    const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      events.push(doc.data());
    });

    return events;
  } catch (error) {
    throw new Error(error.message);
  }
};

const eventService = { addEvent, getAllEvents };

export default eventService;
