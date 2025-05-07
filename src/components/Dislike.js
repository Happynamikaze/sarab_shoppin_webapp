import React, { useEffect, useState } from 'react';
import ItemsPage from './ItemsPage';
import { motion } from 'framer-motion';

const Dislike = () => {
  const [disliked, setDisliked] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('disliked')) || [];
    setDisliked(data);
  }, []);

  return (
	<motion.div
			 
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
    <ItemsPage
      title="Disliked Products"
      emptyMessage="No disliked products yet."
      products={disliked}
    />
	</motion.div>
  );
};

export default Dislike;
