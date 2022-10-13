import React from 'react';
import Frame from './components/Frame';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import { useCart } from './utils';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const shopStateContext = React.createContext();

function App() {
	const [products, setProducts] = React.useState({});
	const [isProductInfoVisible, setIsProductInfoVisible] = React.useState(false);
	const cart = useCart();

	async function fetchProducts() {
		const response = await fetch(`${process.env.REACT_APP_SHOP_URL}/products`);
		const data = await response.json();
		// Removing the electronics category to keep the items more consistent.
		const temp = {};
		data.forEach((element) => {
			if (element.category !== 'electronics') {
				temp[element.id] = element;
			}
		});
		setProducts(temp);
	}

	React.useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='app'>
			<shopStateContext.Provider
				value={{
					cart,
					products,
					isProductInfoVisible,
					setIsProductInfoVisible,
				}}>
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
