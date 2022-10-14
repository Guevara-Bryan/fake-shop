import React from 'react';
import Frame from './components/Frame';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import { useCart, useProducts } from './utils';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const shopStateContext = React.createContext();

function App() {
	const products = useProducts();
	const cart = useCart();

	return (
		<div className='app'>
			<shopStateContext.Provider value={{ cart, products, }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Frame />}>
							<Route index element={<Home />} />
							<Route path='products' element={<Products />}>
								<Route path=':productId' element={<ProductInfo />} />
							</Route>
							<Route path='about-us' element={<AboutUs />} />
							<Route path='cart' element={<Cart />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</shopStateContext.Provider>
		</div>
	);
}

export default App;
