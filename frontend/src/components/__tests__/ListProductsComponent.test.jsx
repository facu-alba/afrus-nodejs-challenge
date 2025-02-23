import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';
import ListProductsComponent from '../ListProductsComponent';

describe('ListProductsComponent test', () => {
    it('it should show the list of products', async () => {
        const mockProducts = [
            {
                id: 1,
                name: 'Electronic Plastic Tuna',
                description: 'Descripción 1',
                price: 10.99,
                quantity: 5,
            },
            {
                id: 2,
                name: 'Ergonomic Metal Sausages',
                description: 'Descripción 2',
                price: 20.99,
                quantity: 10,
            },
        ];

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockProducts),
            })
        );

        render(<ListProductsComponent />);

        const product1 = await screen.findByText('Electronic Plastic Tuna');
        const product2 = await screen.findByText('Ergonomic Metal Sausages');
        expect(product1).toBeInTheDocument();
        expect(product2).toBeInTheDocument();
    });
});