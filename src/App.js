import React from 'react';
import Frame from './components/Frame';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ProductInfo from './components/ProductInfo';
import { useCart, useProducts } from './utils';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export const shopStateContext = React.createContext();

function App() {
	const products = useProducts();
	const cart = useCart();
	return (
		<div className='app'>
			<shopStateContext.Provider value={{ cart, products }}>
				<BrowserRouter basename='/fake-shop'>
					<Routes>
						<Route path='/' element={<Frame />}>
							<Route index element={<Home />} />
							<Route path='products' element={<Products />} />
							<Route path='about-us' element={<AboutUs />} />
							<Route path='product-info/:productId' element={<ProductInfo />} />
						</Route>
						<Route
							path='*'
							element={
								<div>
									<h1>404 - PAGE DOES NOT EXIST</h1>
									<Link to='/'>Back to home page</Link>
								</div>
							}
						/>
					</Routes>
				</BrowserRouter>
			</shopStateContext.Provider>
		</div>
	);
}

export default App;
