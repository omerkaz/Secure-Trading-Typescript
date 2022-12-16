import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from '@features/home/Navigation';

describe('Navigation elements renders correctly', () => {
    test('snapshot test', () => {
        const componentTree = render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>,
        );
        const link1 = screen.getByText('Satıcı Başvurusu Oluştur');
        expect(link1).toBeInTheDocument();
        const link2 = screen.getByText('Alıcı Başvurusu Oluştur');
        expect(link2).toBeInTheDocument();
        const link3 = screen.getByText('Başvuru Durum Sorgula');
        expect(link3).toBeInTheDocument();
        const link4 = screen.getByText('Başvuru İptal');
        expect(link4).toBeInTheDocument();
    });
});
