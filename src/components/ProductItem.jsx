import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductItem.css';

const ProductItem = ({ id, title, price, image, rating }) => {
	return (
		<Link to={`${id}`}>
			<div className='product-item'>
				<img className='product-item__image' src={image} alt='' />
				<p className='product-item__title'>{title}</p>
				<div className='product-item__nums'>
					<p>{'$' + price}</p>
					<p>{'Rating: ' + rating.rate}</p>
				</div>
				<button className='product-item__button'>Add to Cart</button>
			</div>
		</Link>
	);
};

export default ProductItem;
