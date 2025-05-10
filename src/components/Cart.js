import React, { useEffect, useState } from 'react';
import ItemsPage from './ItemsPage';
import { motion } from 'framer-motion';


const Cart = () => {
  const [carted, setCarted] = useState([]);

  useEffect(() => {
    const rawData = JSON.parse(localStorage.getItem('carted')) || []; 
    const filteredData = rawData.filter(
      (item) => item && item.id && item.name && item.imageUrl
    );

    setCarted(filteredData);
  }, []);

  return (
<motion.div
			 
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
	<ItemsPage
      title="Cart"
      emptyMessage="No items in cart."
      products={carted}
    />
	</motion.div>
  );
};

export default Cart;
