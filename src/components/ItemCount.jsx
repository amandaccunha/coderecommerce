import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
      <button className="add-button" onClick={() => onAdd(count)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ItemCount;
