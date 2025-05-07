import React, { useState, useRef } from 'react';

import { motion } from 'framer-motion';




const ProductCard = ({ product, onSwipe }) => {
	const { id, name, brand, price, originalPrice, discountPercentage, imageUrl } = product;
	const [isDragging, setIsDragging] = useState(false);
	const [startPos, setStartPos] = useState(null);
	const [translate, setTranslate] = useState({ x: 0, y: 0 });
	const cardRef = useRef(null);

	const handleTouchStart = (e) => {
		setIsDragging(true);
		setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
	};

	const handleTouchMove = (e) => {
		 
		if (!isDragging) return;
		
		const currentX = e.touches[0].clientX;
		const currentY = e.touches[0].clientY;
		setTranslate({
			x: currentX - startPos.x,
			y: currentY - startPos.y,
		});
		const maxX = 120;  
		const maxY = 120;  
		
		setTranslate({
		  x: Math.max(-maxX, Math.min(currentX - startPos.x, maxX)),
		  y: Math.max(-maxY, Math.min(currentY - startPos.y, maxY)),
		});
		
	};

	const handleTouchEnd = () => {
		setIsDragging(false);

		if (translate.x > 100) {
			onSwipe('right', id);
		} else if (translate.x < -100) {
			onSwipe('left', id);
		} else if (translate.y < -100) {
			onSwipe('up', id);
		}

		setTranslate({ x: 0, y: 0 });
	};

	const rotation = translate.x / 20;

	return (
		
		<div
			ref={cardRef}
			className="  card-bg h-auto mb-5  p-4 bg-white rounded-xl shadow-xl absolute transition-transform duration-300 ease-out"
			style={{
				transform: `translate(${translate.x}px, ${translate.y}px) rotate(${rotation}deg)`,
				zIndex: 10,
			}}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<motion.div

		initial={{ opacity: 0, scale: 0.98 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.3 }}
	  >
			<img
				src={imageUrl}
				alt={name}
				className="w-full h-60 object-contain rounded-lg"
			/>
			<div className="mt-4">
			 
				<h3 className="text-lg font-bold text-white capitalize">{name}</h3>
				<p className="text-sm text-gray-500 italic ">{brand}</p>
				<div className="mt-2 flex items-center">
					<span className="text-xl font-semibold text-green-500">${price}</span>
					{originalPrice && (
						<span className="ml-2 text-sm line-through text-gray-500">${originalPrice}</span>
					)}
				</div>
				{discountPercentage && (
					<p className="text-green-500 text-sm mt-1">{discountPercentage}% OFF</p>
				)}
				 
			</div>
			<div className="mt-4 flex justify-between">
				<button
					className="bg-red-500 text-white px-4 py-2 rounded-lg"
					onClick={() => onSwipe('left', id)}
				>
					Dislike
				</button>
				<button
					className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
					onClick={() => onSwipe('up', id)}
				>
					Add to Cart
				</button>
				<button
					className="bg-pink-500 text-white px-4 py-2 rounded-lg"
					onClick={() => onSwipe('right', id)}
				>
					Like
				</button>
			</div>
			</motion.div>
		</div>
	);
};

export default ProductCard;
