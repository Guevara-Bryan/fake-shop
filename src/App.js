import React from 'react';
import Frame from './components/Frame';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductInfo from './components/ProductInfo';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [products, setProducts] = React.useState({});

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
		console.log(temp);
	}

	React.useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route path='/' element={<Frame />}>
						<Route index element={<Home />} />
						<Route
							path='products'
							element={<Products productsList={Object.values(products)} />}
						>
							<Route path=':productId' element={<ProductInfo products={products} />} />
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
