import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';

import Button from '@components/button/Button';
import ErrorMessages from '@components/errorMessages/ErrorMessages';

type TInitialValues = {
    confirmationCode: string;
};
const initialValues = {
    confirmationCode: '',
};
interface Props {
    nextForm: Dispatch<SetStateAction<number>>;
    getSmsCode: (state: any) => any;
}

function SMSConfirmation({ nextForm, getSmsCode }: Props) {
    const [errorStatus, setErrorStatus] = useState(false);
    // taking last user's(buyer or seller doesn't matter) sms code in redux
    const SMSCode = useSelector(getSmsCode);
    return (
        <div className="w-50">
            <div>
                <div className="text-center mb-3 fw-bolder fs-3">
                    Sms Doğrulama
                </div>
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values: TInitialValues) => {
                            // checking input and smsCode if they equal then trigger state(nextForm) or dont equal and set error status true
                            SMSCode === values.confirmationCode
                                ? nextForm((prevValue) => prevValue + 1)
                                : setErrorStatus(true);
                        }}
                    >
                        <Form>
                            <div className="form-outline mb-4">
                                <Field
                                    className="form-control"
                                    name="confirmationCode"
                                    placeholder="Sms Kodu"
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button children={'Gönder'}></Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                {errorStatus ? (
                    <ErrorMessages error="Hatalı kod girdiniz." />
                ) : null}
                {SMSCode ? (
                    <div className="text-center mt-2 fs-5">
                        Sms Kodu: {SMSCode}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default SMSConfirmation;
