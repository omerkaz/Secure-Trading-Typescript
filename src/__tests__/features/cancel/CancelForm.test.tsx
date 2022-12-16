import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';

import CancelForm from '@features/cancel/components/CancelForm';

describe('CancelForm elements renders correctly', () => {
    test('snapshot test', () => {
        const nextForm = jest.fn();
        const componentTree = render(
            <Provider store={store}>
                <CancelForm nextForm={nextForm} />
            </Provider>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        const nextForm = jest.fn();
        render(
            <Provider store={store}>
                <CancelForm nextForm={nextForm} />
            </Provider>,
        );
        const header = screen.getByText('BAŞVURU İPTAL BİLGİLERİ');
        expect(header).toBeInTheDocument();
        const inputElement = screen.getByText('TC Kimlik Numarası');
        expect(inputElement).toBeInTheDocument();
        const button = screen.getByText('Gönder');
        expect(button).toBeInTheDocument();
    });
});
