import React from 'react';
import { Link } from 'react-router-dom';
import { shortenText } from '../utils';
import '../styles/ProductItem.css';
import { shopStateContext } from '../App';

const ProductItem = ({ id, title, price, image }) => {
	const { cart } = React.useContext(shopStateContext);

	return (
		<div className='product-item'>
			<div className='product-item__image-frame'>
				<img className='product-item__image' src={image} alt='' />
			</div>
			<Link to={`/product-info/${id}`} className='product-item__title'>
				<p>{shortenText(title, 50)}</p>
			</Link>
			<div className='product-item__price'>
				<p>{'$' + price.toFixed(2)}</p>
			</div>
			<button
				className='product-item__button'
				onClick={() => {
					cart.updateItemCount(id);
				}}>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductItem;
