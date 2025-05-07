import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Like from './components/Like';
import Dislike from './components/Dislike';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import productData from './json/products.json';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { App as CapacitorApp } from '@capacitor/app';

const AppInner = () => {
  const [products] = useState(productData);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = CapacitorApp.addListener('backButton', () => {
      if (location.pathname !== '/') {
        navigate(-1);  
      } else {
        CapacitorApp.exitApp(); 
      }
    });
  
    return () => {
      handler.then((h) => h.remove());
    };
  }, [location, navigate]);
  

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/liked" element={<Like />} />
        <Route path="/disliked" element={<Dislike />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
};
console.log('%cBuilt with love by Sarabjeet Singh 💻', 'color: green; font-size: 16px');

const App = () => {
  return (
    <div className="App w-full h-screen  ">
      <Router>
        <AppInner />
      </Router>
    </div>
  );
};

export default App;
