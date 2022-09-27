import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Frame = () => {
	return (
		<div>
			<h1>Fake Shop App</h1>
			<nav>
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
