import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';

import BuyerForm from '@features/buyer/components/form/application/BuyerForm';

describe('BuyerForm elements renders correctly', () => {
    test('snapshot test', () => {
        const nextForm = jest.fn();
        const componentTree = render(
            <Provider store={store}>
                <BuyerForm nextForm={nextForm} />
            </Provider>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        const nextForm = jest.fn();
        render(
            <Provider store={store}>
                <BuyerForm nextForm={nextForm} />
            </Provider>,
        );
        const sellerHeader = screen.getByText('Satıcı Bilgileri');
        expect(sellerHeader).toBeInTheDocument();
        const sellersCardElement = screen.getByText('Referans No:');
        expect(sellersCardElement).toBeInTheDocument();
        const buyerHeader = screen.getByText('Alıcı Bilgileri');
        expect(buyerHeader).toBeInTheDocument();
    });
});
