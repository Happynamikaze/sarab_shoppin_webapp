import React, { useEffect, useState } from 'react';
import ItemsPage from './ItemsPage';
import { motion } from 'framer-motion';


const Cart = () => {
  const [carted, setCarted] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('carted')) || [];
    setCarted(data);
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
