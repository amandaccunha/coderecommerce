import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2>Carrinho vazio 🛒</h2>;
  }

  return (
    <div>
      <h2>Seu Carrinho</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x R$ {item.price} = R$ {item.quantity * item.price}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {totalPrice}</h3>
      <button onClick={clearCart}>Limpar Carrinho</button>
      <br />
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;
