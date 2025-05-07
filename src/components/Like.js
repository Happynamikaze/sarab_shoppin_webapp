import React, { useEffect, useState } from 'react';
import ItemsPage from './ItemsPage';

import { motion } from 'framer-motion';

const Like = () => {
	const [liked, setLiked] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('liked')) || [];
		setLiked(data);
	}, []);

	return (
		<motion.div
			 
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<ItemsPage
				title="Liked Products"
				emptyMessage="No liked products yet."
				products={liked}
			/>
		</motion.div>
	);
};

export default Like;
