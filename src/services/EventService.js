import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
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
      startDate: data.startDate,
      endDate: data.endDate,
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

const getEventDetails = async (id) => {
  try {
    const docSnap = await getDoc(doc(db, 'events', id));

    return docSnap.data();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEventParticipants = async (eventID) => {
  try {
    const participantsID = [];
    const participants = [];

    const q = query(
      collection(db, 'reservations'),
      where('eventID', '==', eventID),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      participantsID.push(doc.data().userID);
    });

    const q2 = query(
      collection(db, 'users'),
      where('uid', 'in', participantsID),
    );
    const querySnapshot2 = await getDocs(q2);

    querySnapshot2.forEach((doc) => {
      participants.push(doc.data());
    });

    return participants;
  } catch (error) {
    throw new Error(error.message);
  }
};

const eventService = {
  addEvent,
  getAllEvents,
  getEventDetails,
  getEventParticipants,
};

export default eventService;
