import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';
import SMSConfirmation from '@components/SMSConfirmation/SMSConfirmation';
import { SetStateAction } from 'react';

describe('SMSConfirmation elements renders correctly', () => {
    test('snapshot test', () => {
        const nextForm = jest.fn()
        const getSMSCode = jest.fn(() => "1234")
        const componentTree = render(<Provider store={store}><SMSConfirmation nextForm={nextForm} getSmsCode={getSMSCode} /></Provider>);
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        const nextForm = jest.fn()
        const getSMSCode = jest.fn(() => "1234")
        render(<Provider store={store}><SMSConfirmation nextForm={nextForm} getSmsCode={getSMSCode} /></Provider>);
        const header = screen.getByText('Sms Doğrulama');
        expect(header).toBeInTheDocument();
        const button = screen.getByText('Gönder');
        expect(button).toBeInTheDocument();
        const SMSCode = screen.getByText('Sms Kodu: 1234');
        expect(SMSCode).toBeInTheDocument();
    });
});
