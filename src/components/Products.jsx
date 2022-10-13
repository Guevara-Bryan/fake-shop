import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductItem from './ProductItem';

import '../styles/Products.css';

import { shopStateContext } from '../App';

const Products = () => {
	const {products} = React.useContext(shopStateContext);
	return (
		<div className='products-page'>
			{Object.values(products).map((product) => {
				return <ProductItem key={product.id} {...product} />;
			})}
			<Outlet />
		</div>
	);
};

export default Products;
