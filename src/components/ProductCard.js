 
import React, { useState } from 'react';

const ProductCard = ({ product, onSwipe }) => {
  const { id, name, brand, price, originalPrice, discountPercentage, imageUrl } = product;
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    onSwipe(direction, id);
  };

  return (
    <div
      className={`w-80 h-auto p-4 bg-white rounded-lg shadow-lg transform ${
        swipeDirection === 'left' ? 'translate-x-[-100vw]' : ''
      } ${swipeDirection === 'right' ? 'translate-x-[100vw]' : ''}`}
      style={{ transition: 'transform 0.3s ease-out' }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-60 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
        <div className="mt-2">
          <span className="text-xl font-bold">${price}</span>
          {originalPrice && (
            <span className="ml-2 text-sm line-through text-gray-500">${originalPrice}</span>
          )}
        </div>
        {discountPercentage && (
          <div className="text-sm text-green-500 mt-2">{discountPercentage}% OFF</div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-red-500 text-white p-2 rounded-lg"
          onClick={() => handleSwipe('left')}
        >
          Dislike
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded-lg"
          onClick={() => handleSwipe('right')}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
