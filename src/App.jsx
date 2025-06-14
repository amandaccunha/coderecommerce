// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './pages/Cart';
import CheckoutForm from './pages/CheckoutForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bem-vindo!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
