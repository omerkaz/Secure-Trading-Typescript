import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';

import StatusForm from '@features/status/components/StatusForm';

describe('SellerForm elements renders correctly', () => {
    test('snapshot test', () => {
        const nextForm = jest.fn();
        const componentTree = render(
            <Provider store={store}>
                <StatusForm nextForm={nextForm} />
            </Provider>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        const nextForm = jest.fn();
        render(
            <Provider store={store}>
                <StatusForm nextForm={nextForm} />
            </Provider>,
        );
        const inputElement = screen.getByText('TC Kimlik Numarası');
        expect(inputElement).toBeInTheDocument();
        const submitButton = screen.getByText("Gönder");
        expect(submitButton).toBeInTheDocument();
    });
});
