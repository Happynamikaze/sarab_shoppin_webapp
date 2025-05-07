import React, { useEffect, useState } from 'react';
import BackSvg from '../assets/svg/back-arrow.svg';
import { Link } from 'react-router-dom';

const BackBtn = () => {

	return (
		<Link to="/">
			<p className=" absolute z-30   backbtnStyle text-white px-4 py-2 rounded-lg"> 
				<img
				src={BackSvg}
				alt="feafae"
				className="  w-4 h-4"
			/> </p>
		</Link>
	);
};

export default BackBtn;
