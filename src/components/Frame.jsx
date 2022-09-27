import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../styles/Frame.css';

const Frame = () => {
	return (
		<div className='frame-page'>
			<div className='title'>
				<h1>Fake Shop App</h1>
			</div>
			<nav className='nav-bar'>
				<Link to='/'>Home</Link>
				<Link to='products'>Products</Link>
				<Link to='about-us'>About Us</Link>
				<Link to='contact-us'>Contact Us</Link>
			</nav>
			<div className='content'>
				<Outlet />
			</div>
		</div>
	);
};

export default Frame;
