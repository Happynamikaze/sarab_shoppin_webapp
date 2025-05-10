import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../assets/svg/cart.svg';
import like from '../assets/svg/heart.svg';
import Dislike from '../assets/svg/disable-heart.svg';
import ContactInfo from './ContactInfo';

const Footer = ({ likedCount = 0, dislikedCount = 0, cartedCount = 1 }) => {
  return (
    
    <div className="flex flex-col   absolute bottom-4  ">
    <div className='flex'>
    <Link to="/disliked">
        <button className="bg-red-500 text-white px-4 py-2  rounded-lg flex justify-center items-center ">
          <img src={Dislike} alt="Dislike" className="w-4 h-4 me-2" />
          <p>{dislikedCount}</p>
        </button>
      </Link>
     
    <Link to="/cart">
        <button className="bg-yellow-500 text-white px-4 py-2 mx-4 rounded-lg flex justify-center items-center ">
          <img src={Cart} alt="Cart" className="w-4 h-4 me-2" />
          <p>{cartedCount}</p>
        </button>
      </Link>
    <Link to="/liked">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex justify-center items-center ">
          <img src={like} alt="Like" className="w-4 h-4 me-2" />
          <p>{likedCount}</p>
        </button>
      </Link>
      
    </div>
    
    </div>


  );
};

export default Footer;
