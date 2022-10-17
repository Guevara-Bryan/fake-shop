import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className='home__container'>
			<div className='home__main-banner'>
				<div className='main-banner__title'>The refined style you deserve</div>
				<button
					onClick={() => {
						navigate('/products');
					}}
					className='main-banner__shop-button button'
				>
					Shop Now
				</button>
			</div>
		</div>
	);
};

export default Home;
