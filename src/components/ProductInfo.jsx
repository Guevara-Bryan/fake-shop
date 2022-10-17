import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/ProductInfo.css';
import { shopStateContext } from '../App';

const ProductInfo = () => {
	const { cart, products } = React.useContext(shopStateContext);
	const { productId } = useParams();
	const item = products.getProduct(productId);
	const itemCount = cart.getItem(productId);

	return (
		<div className='product-info' onClick={(e) => e.stopPropagation()}>
			{item ? (
				<>
					<img src={item.image} alt='' />
					<h1>{item.title}</h1>
					<article className='product-info__description'>{item.description}</article>
					<p>{'Price: $' + item.price}</p>
					<p>{'Rating: ' + item.rating.rate + ' / 5'}</p>
					<button
						className='product-info__button button'
						onClick={() => {
							cart.updateItemCount(item.id);
						}}
					>
						{`Add to cart ${itemCount > 0 ? '(' + itemCount + ')' : ''}`}
					</button>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default ProductInfo;
