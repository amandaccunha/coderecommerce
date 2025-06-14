import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
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
            <a href={`/item/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
