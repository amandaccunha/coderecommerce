// src/data/orders.js
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/fireconfig";

/**
 * Cria um objeto de pedido formatado
 */
export const createOrderObject = ({ buyer, cartItems }) => {
  const items = cartItems.map(item => ({
    id: item.id,
    title: item.name,
    quantity: item.quantity,
    price: item.price,
  }));

  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return {
    buyer,
    items,
    date: Timestamp.now(),
    total,
  };
};

/**
 * Envia o pedido para o Firestore e retorna o ID do documento criado
 */
export const submitOrder = async (orderData) => {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, orderData);
  return docRef.id;
};
