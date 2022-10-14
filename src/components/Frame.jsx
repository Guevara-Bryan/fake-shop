import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../styles/Frame.css';

import { shopStateContext } from '../App';

const Frame = () => {
	const { cart } = React.useContext(shopStateContext);
	return (
		<div className='frame-page'>
			<div className='title'>
				<h1>Fake Shop App</h1>
			</div>
			<nav className='nav-bar'>
				<Link to='/'>Home</Link>
				<Link to='products'>Products</Link>
				<Link to='about-us'>About Us</Link>
				<Link to='Cart'>{`Cart ${
					cart.count > 0 ? ': ' + cart.count : ''
				}`}</Link>
			</nav>
			<div className='content'>
				<Outlet />
			</div>
		</div>
	);
};

export default Frame;
