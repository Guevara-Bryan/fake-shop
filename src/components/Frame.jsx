import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../styles/Frame.css';
import Cart from './Cart';

import { shopStateContext } from '../App';

const Frame = () => {
	const { cart } = React.useContext(shopStateContext);
	const [isCartVisible, setIsCartVisible] = React.useState(false);
	return (
		<div className='frame-page'>
			<div className='frame-header'>
				<div className='title'>
					<h1>Fake Shop App</h1>
				</div>
				<nav className='nav-bar'>
					<Link to='/'>Home</Link>
					<Link to='products'>Products</Link>
					<Link to='about-us'>About Us</Link>
				</nav>
				<button
					onClick={() => {
						setIsCartVisible(true);
					}}>
					Cart
				</button>
			</div>
			<Cart isVisible={isCartVisible} setIsVisible={setIsCartVisible} />
			<div className='content'>
				<Outlet />
			</div>
		</div>
	);
};

export default Frame;
