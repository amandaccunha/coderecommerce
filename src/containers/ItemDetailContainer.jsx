import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/products';
import ItemCount from '../components/ItemCount';
import { CartContext } from '../context/cartContext';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [added, setAdded] = useState(false); // controla se já adicionou
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(itemId).then(setItem);
  }, [itemId]);

  const handleAdd = (quantity) => {
    addToCart(item, quantity); // adiciona ao carrinho via contexto
    setAdded(true);           // esconde ItemCount
  };

  if (!item) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Categoria: {item.category}</p>
      {!added ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p>{`Você adicionou ${item.name} ao carrinho!`}</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
