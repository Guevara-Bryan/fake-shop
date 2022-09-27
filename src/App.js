import React from 'react';
import Frame from './components/Frame';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Product from './components/Product';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

function App() {
	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route path='/' element={<Frame />}>
						<Route path='products' element={<Products />}>
							<Route path=':productId' element={<Product />} />
						</Route>
						<Route path='about-us' element={<AboutUs />} />
						<Route path='contact-us' element={<ContactUs />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
