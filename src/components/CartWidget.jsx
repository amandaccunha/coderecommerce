import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {totalQuantity > 0 && (
        <span className="cart-count">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;
