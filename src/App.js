import React, { useState, useEffect } from 'react';  
import ProductList from './components/ProductList';
import productData from './json/products.json';
import  './App.css'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/path/to/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App   flex justify-center items-center">
      <ProductList products={productData} /> 
    </div>
  );
};

export default App;
