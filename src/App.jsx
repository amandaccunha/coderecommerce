import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à Loja de Álbuns de Música!" />
    </>
  );
}

export default App;

