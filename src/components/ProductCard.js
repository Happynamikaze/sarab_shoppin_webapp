import React, { useState, useRef } from 'react';
import like from '../assets/svg/heart.svg';
import Dislike from '../assets/svg/disable-heart.svg';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onSwipe, style = {} }) => {
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
		handleMove(currentX, currentY);
	};

	const handleTouchEnd = () => {
		handleEnd();
	};

	const handleMouseDown = (e) => {
		e.preventDefault();
		setIsDragging(true);
		setStartPos({ x: e.clientX, y: e.clientY });

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		handleMove(e.clientX, e.clientY);
	};

	const handleMouseUp = () => {
		handleEnd();
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	};

	
	const handleMove = (currentX, currentY) => {
		const maxX = 120;
		const maxY = 120;
		setTranslate({
			x: Math.max(-maxX, Math.min(currentX - startPos.x, maxX)),
			y: Math.max(-maxY, Math.min(currentY - startPos.y, maxY)),
		});
	};

	const handleEnd = () => {
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
			className="card-bg h-auto mb-5 p-4 bg-white rounded-xl shadow-xl absolute transition-transform duration-300 ease-out select-none cursor-grab"
			style={{
				transform: `translate(${translate.x}px, ${translate.y}px) rotate(${rotation}deg)`,
				zIndex: 10,
			}}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onMouseDown={handleMouseDown}
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
						{(originalPrice > price) && (
							<span className="ml-2 text-sm line-through text-gray-500">${originalPrice}</span>
						)}
					</div>
					{discountPercentage > 0 && (
						<p className="text-green-500 text-sm mt-1">{discountPercentage}% OFF</p>
					)}

				</div>
				<div className="mt-4 flex justify-between">
					<button
						className="bg-red-500 cus-shadow-box text-white px-4 py-2 rounded-lg"
						onClick={() => onSwipe('left', id)}
					>
						<img src={Dislike} alt="Dislike" className="w-4 cus-shadow h-4" />
					</button>
					<button
						className="bg-yellow-500 cus-shadow-box text-white px-4 py-2 rounded-lg"
						onClick={() => onSwipe('up', id)}
					>
						Add to Cart
					</button>
					<button
						className="bg-pink-500 cus-shadow-box text-white px-4 py-2 rounded-lg"
						onClick={() => onSwipe('right', id)}
					>
						<img src={like} alt="Like" className="w-4 cus-shadow h-4" />
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default ProductCard;
