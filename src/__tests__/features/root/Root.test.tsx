import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Root from '@features/root/Root';

describe('Root elements renders correctly', () => {
    test('snapshot test', () => {
        const componentTree = render(
            <BrowserRouter>
                <Root />
            </BrowserRouter>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        render(
            <BrowserRouter>
                <Root />
            </BrowserRouter>,
        );
        const navbarHeader = screen.getByText('Sizin için...');
        expect(navbarHeader).toBeInTheDocument();
        const footerText = screen.getByText(
            'Firmamız, alıcılar ve satıcılar arasında güvenli ve adil bir ticaret ortamı oluşturur. Bu sayede, her iki taraf da memnun kalarak, ticaretin daha da büyümesine katkıda bulunur.',
        );
        expect(footerText).toBeInTheDocument();
        const footerCopyright = screen.getByText('© 2022 Copyright ST');
        expect(footerCopyright).toBeInTheDocument();
    });
});
