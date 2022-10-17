import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/PageNotFound.css';

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div className='page-not-found'>
			<h1>404 - Page Not Found</h1>
			<button
				className='page-not-found__home-button button'
				onClick={() => {
					navigate('/');
				}}
			>
				Back to Home Page
			</button>
		</div>
	);
};

export default PageNotFound;
