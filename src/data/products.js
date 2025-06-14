import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/fireconfig"; // verifique se este caminho está certo

export const fetchProducts = async (categoryId) => {
  const ref = collection(db, "items");
  const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchProductById = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};
