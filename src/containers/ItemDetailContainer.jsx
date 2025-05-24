import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/products';
import ItemCount from '../components/ItemCount';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchProductById(itemId).then(setItem);
  }, [itemId]);

  const handleAdd = (quantity) => {
    alert(`Você adicionou ${quantity} unidade(s) de ${item.name} ao carrinho!`);
    // Futuramente: lógica para atualizar contexto ou estado do carrinho
  };

  if (!item) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Categoria: {item.category}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetailContainer;
