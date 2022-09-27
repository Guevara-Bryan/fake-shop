import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductItem from './ProductItem';

import '../styles/Products.css';

const Products = ({ productsList }) => {
	return (
		<div className='products-page'>
			<Outlet />
			{productsList.map((product) => {
				return <ProductItem key={product.id} {...product} />;
			})}
		</div>
	);
};

export default Products;
