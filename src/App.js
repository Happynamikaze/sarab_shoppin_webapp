import React, { useState, useEffect } from 'react';  
import ProductList from './components/ProductList';
import productData from './json/products.json';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/path/to/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen flex justify-center items-center">
      <ProductList products={productData} /> 
    </div>
  );
};

export default App;
