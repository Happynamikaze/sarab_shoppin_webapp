 
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [productStack, setProductStack] = useState(products);

  const handleSwipe = (direction, productId) => {
    if (productStack.length > 0) {
      console.log(`${direction === 'left' ? 'Passed' : 'Liked'} Product ID: ${productId}`);
      setProductStack(productStack.slice(1));  
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {productStack.length > 0 ? (
        <ProductCard product={productStack[0]} onSwipe={handleSwipe} />
      ) : (
        <div className="text-center text-xl font-semibold">No more products!</div>
      )}
    </div>
  );
};

export default ProductList;
