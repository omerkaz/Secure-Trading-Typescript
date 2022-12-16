import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SuccessCard from '@components/cards/SuccessCard';

describe('SuccessCard elements renders correctly', () => {
    test('snapshot test', () => {
        const componentTree = render(
            <BrowserRouter>
                <SuccessCard
                    header={'TEST HEADER'}
                    children={'TEST CHİLDREN'}
                />
            </BrowserRouter>,
        );
        expect(componentTree).toMatchSnapshot();
    });
    
    test('elements test', () => {
        render(
            <BrowserRouter>
                <SuccessCard
                    header={'TEST HEADER'}
                    children={'TEST CHİLDREN'}
                />
            </BrowserRouter>,
        );
        const header = screen.getByText('TEST HEADER');
        expect(header).toBeInTheDocument();
        const children = screen.getByText('TEST CHİLDREN');
        expect(children).toBeInTheDocument();
    });
});
