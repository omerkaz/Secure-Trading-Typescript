import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from '@components/button/Button';

describe('Button elements renders correctly', () => {
    test('snapshot test', () => {
        const componentTree = render(<Button children={'TEST'} />);
        expect(componentTree).toMatchSnapshot();
    });
    
    test('elements test', () => {
        render(<Button children={'TEST'} />);
        const button = screen.getByText('TEST');
        expect(button).toBeInTheDocument();
    });
});
