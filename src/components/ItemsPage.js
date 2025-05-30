import React from 'react';
import BackBtn from './backbtn';
import ContactInfo from './ContactInfo';

const ItemsPage = ({ title, emptyMessage, products }) => {
  return (
    
    <div className="p-4  card-cart-blur-bg">
      <div className='my-2   top-1 '>
       <ContactInfo/>
      </div>
      <h2 className="text-2xl text-white font-bold mb-4">
        <BackBtn /> {title}
      </h2>
      {products.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="border  p-4 mb-2 rounded flex justify-between items-center"
          >
            <div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="md:w-full md:ms-5 ms-0 w-48">
              <h3 className="md:text-lg text-white text-start text-xs font-semibold">{product.name}</h3>
              <p className="text-green-500 text-start">${product.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemsPage;
