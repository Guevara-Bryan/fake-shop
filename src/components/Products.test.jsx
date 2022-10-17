import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Products from './Products';

import { BrowserRouter } from 'react-router-dom';

const product = (id) => ({
	id,
	title: 'title',
	image: 'someimage',
	price: 3.5,
	rating: 4.5,
});
const pl = [];
for (let i = 0; i < 5; i++) {
	pl.push(product(i));
}

it('Tells whether the products page displays all the products', () => {
	const { getAllByText } = render(
		<BrowserRouter>
			<Products productsList={pl} />
		</BrowserRouter>
	);
	expect(getAllByText('title').length).toBe(pl.length);
});
