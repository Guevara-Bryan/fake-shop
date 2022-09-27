import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = ({ productsList = ['1xv63', '45ypq', '8796yr'] }) => {
	return (
		<div>
			{productsList.map((pr, index) => {
				return (
					<Link to={pr}>
						<div key={index}>{`Product: ${pr}`}</div>
					</Link>
				);
			})}
			<Outlet />
		</div>
	);
};

export default Products;
