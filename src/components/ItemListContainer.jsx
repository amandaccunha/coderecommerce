// src/containers/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts } from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); // <- agora está certo!
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts(categoryId).then(setItems);
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {greeting && <h2>{greeting}</h2>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
