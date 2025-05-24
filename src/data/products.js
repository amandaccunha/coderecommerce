const products = [
    { id: '1', name: 'Álbum Rock 1', category: 'rock' },
    { id: '2', name: 'Álbum Pop 1', category: 'pop' },
    { id: '3', name: 'Álbum Jazz 1', category: 'jazz' },
  ];
  
  export const fetchProducts = (categoryId) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(prod => prod.category === categoryId));
        } else {
          resolve(products);
        }
      }, 1000);
    });
  
  export const fetchProductById = (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === id));
      }, 1000);
    });
  