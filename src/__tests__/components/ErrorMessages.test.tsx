import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import ErrorMessages from '@components/errorMessages/ErrorMessages';

describe('ErrorMessages elements renders correctly', () => {
    test('snapshot test', () => {
        const componentTree = render(<ErrorMessages error={'TEST ERROR'} />);
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        render(<ErrorMessages error={'TEST ERROR'} />);
        const message = screen.getByText('TEST ERROR');
        expect(message).toBeInTheDocument();
    });
});
