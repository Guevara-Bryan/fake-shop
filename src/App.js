import React from 'react';
import Frame from './components/Frame';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ProductInfo from './components/ProductInfo';
import Checkout from './components/Checkout';
import { useCart, useProducts } from './utils';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const shopStateContext = React.createContext();

function App() {
	const products = useProducts();
	const cart = useCart();

	return (
		<div className='app'>
			<shopStateContext.Provider value={{ cart, products }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Frame />}>
							<Route index element={<Home />} />
							<Route path='products' element={<Products />} />
							<Route path='about-us' element={<AboutUs />} />
							<Route path='checkout' element={<Checkout />} />
							<Route path='product-info/:productId' element={<ProductInfo />} />
							<Route path='*' element={<h1>PAGE DOES NOT EXIST</h1>} />
						</Route>
					</Routes>
				</BrowserRouter>
			</shopStateContext.Provider>
		</div>
	);
}

export default App;
