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
      createdAt: new Date().toLocaleDateString('en-GB'),

      photoURLs: data.photoURLs,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllProducts = async () => {
  const products = [];
  try {
    //
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductDetails = async (id) => {
  try {
    const docSnap = await getDoc(doc(db, 'products', id));

    return docSnap.data();
  } catch (error) {
    throw new Error(error.message);
  }
};

const shopService = { addProduct, getAllProducts, getProductDetails };

export default shopService;
