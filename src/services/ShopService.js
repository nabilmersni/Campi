import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from 'src/firebase';
import { v4 as uuidv4 } from 'uuid';

const addProduct = async (data) => {
  try {
    const id = uuidv4();
    await setDoc(doc(db, 'products', id), {
      id,
      title: data.title,
      subtitle: data.subtitle,
      price: Number(data.price),
      category: data.category[0],
      description: data.description,
      createdAt: Timestamp.fromDate(new Date()),
      photoURLs: data.photoURLs,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const shopService = { addProduct };

export default shopService;
