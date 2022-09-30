import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductItem.css';

const ProductItem = ({ id, title, price, image, rating }) => {
	return (
		<div className='product-item'>
			<img className='product-item__image' src={image} alt='' />
			<Link to={`${id}`} className='product-item__title'>
				<p>{title}</p>
			</Link>
			<div className='product-item__nums'>
				<p>{'$' + price}</p>
				<p>{'Rating: ' + rating.rate}</p>
			</div>
			<button className='product-item__button'>Add to Cart</button>
		</div>
	);
};

export default ProductItem;
