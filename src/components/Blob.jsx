import React from 'react';

import '../styles/Blob.css';

const Blob = ({ color, angle }) => {
	return (
		<div
			className='blob'
			style={{
				backgroundColor: color,
				transition: 'transform 1s, background-color 1s, box-shadow 1s',
				transform: `rotate(${angle}deg)`,
				boxShadow: `10px -10px 10px 10px ${color === 'rgba(0, 255, 0, 0.5)' ? 'rgba(0, 0, 255, 0.5)' : 'rgba(0, 255, 0, 0.5)'}`,
				backdropFilter: 'blur(10px)'
			}}
		></div>
	);
};

export default Blob;
