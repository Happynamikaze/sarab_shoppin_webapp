
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import like from '../assets/svg/heart.svg';
import Dislike from '../assets/svg/disable-heart.svg';
import Cart from '../assets/svg/cart.svg';
import Footer from './footer'
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';



const ProductList = ({ products }) => {

  const [productStack, setProductStack] = useState(products);

  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);
  const [carted, setCarted] = useState([]);

  useEffect(() => {
    const storedLiked = JSON.parse(localStorage.getItem('liked')) || [];
    const storedDisliked = JSON.parse(localStorage.getItem('disliked')) || [];
    const storedCarted = JSON.parse(localStorage.getItem('carted')) || [];

    setLiked(storedLiked);
    setDisliked(storedDisliked);
    setCarted(storedCarted);


  }, []);


  const handleSwipe = (direction, productId) => {
    if (productStack.length === 0) return;

    const swipedProduct = productStack[0];


    const removeFromList = (list) => list.filter(p => p.id !== productId);

    const cleanedLiked = removeFromList(liked);
    const cleanedDisliked = removeFromList(disliked);
    const cleanedCarted = removeFromList(carted);

    const listMap = {
      right: 'liked',
      left: 'disliked',
      up: 'carted',
    };

    const targetList = listMap[direction];
    if (!targetList) return;


    const finalLists = {
      liked: cleanedLiked,
      disliked: cleanedDisliked,
      carted: cleanedCarted,
    };

    finalLists[targetList] = [...finalLists[targetList], swipedProduct];


    setLiked(finalLists.liked);
    setDisliked(finalLists.disliked);
    setCarted(finalLists.carted);


    localStorage.setItem('liked', JSON.stringify(finalLists.liked));
    localStorage.setItem('disliked', JSON.stringify(finalLists.disliked));
    localStorage.setItem('carted', JSON.stringify(finalLists.carted));




    setProductStack(productStack.slice(1));
  };





  return (
    <motion.div

      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      <div className="flex flex-col  justify-center items-center w-screen h-screen overflow-hidden relative ">

      <div className='mt-2 absolute top-1 '>
       <ContactInfo/>
      </div>


        {productStack.length > 0 ? (

          <ProductCard  product={productStack[0]} onSwipe={handleSwipe} />
        ) : (
          <div className="text-center text-xl font-semibold">That's all for now! New items will be <br /> available soon. Stay tuned.🕊️</div>
        )}

        <Footer
          likedCount={liked.length}
          dislikedCount={disliked.length}
          cartedCount={carted.length}
        />


      </div>
    </motion.div>
  );
};

export default ProductList;
