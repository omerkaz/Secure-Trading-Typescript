import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';

import SellerForm from '@features/seller/components/SellerForm';

describe('SellerForm elements renders correctly', () => {
    test('snapshot test', () => {
        const nextForm = jest.fn();
        const componentTree = render(
            <Provider store={store}>
                <SellerForm nextForm={nextForm} />
            </Provider>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        const nextForm = jest.fn();
        render(
            <Provider store={store}>
                <SellerForm nextForm={nextForm} />
            </Provider>,
        );
        const inputElement = screen.getByText('Tc Kimlik Numarası');
        expect(inputElement).toBeInTheDocument();
        const KVKKText = screen.getByText("Tarafıma hizmet sunulması amacıyla, bulut tabanlı yazılımların yurt dışında tutulması nedeniyle kişisel verilerimin yurt dışına aktarılmasına ilişkin Açık Rıza Metni'ni okudum. Kişisel verilerimin bu kapsamda aktarılmasına onay veriyorum.");
        expect(KVKKText).toBeInTheDocument();
    });
});
