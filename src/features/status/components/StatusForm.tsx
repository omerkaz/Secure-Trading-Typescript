import { Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Button from '@components/button/Button';
import ErrorMessages from '@components/errorMessages/ErrorMessages';
import FormElement from '@components/form/FormElement';

import { generateSmsCode } from '@utils/codeGenerator/generateCode';
import { statusFormInitialValues as initialValues } from '@utils/formsInitialValue/initialValues';
import { statusValidationSchema } from '@utils/yup/statusValidationSchema';

import { getBuyers, getSellers } from '../applicationStatusSlice';
import {
    createStatusInformation,
    takeMatchedCustomer,
} from '../applicationStatusSlice';

interface Props {
    nextForm: Dispatch<SetStateAction<number>>;
}
type TStatus = Yup.InferType<typeof statusValidationSchema>;

function StatusForm({ nextForm }: Props) {
    const [errorStatus, setErrorStatus] = useState(false);
    const dispatch = useDispatch();
    const sellers = useSelector(getSellers);
    const buyers = useSelector(getBuyers);

    const checkSellersAndBuyers = (
        values: TStatus,
        sellers: any,
        buyers: any,
    ) => {
        const checkedSellers = sellers.filter(
            (seller: { TCNumber: string }) =>
                seller.TCNumber === values.TCNumber,
        );
        if (checkedSellers.length > 0) {
            dispatch(
                takeMatchedCustomer({
                    checkedCustomer: checkedSellers,
                    isSeller: true,
                }),
            );
            dispatch(
                createStatusInformation({ values, SMSCode: generateSmsCode() }),
            );
            return true;
        }
        const checkedBuyers = buyers.filter(
            (buyer: { TCNumber: string }) => buyer.TCNumber === values.TCNumber,
        );
        if (checkedBuyers.length > 0) {
            dispatch(
                takeMatchedCustomer({
                    checkedCustomer: checkedBuyers,
                    isSeller: false,
                }),
            );
            dispatch(
                createStatusInformation({ values, SMSCode: generateSmsCode() }),
            );
            return true;
        }
        return false;
    };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: TStatus) => {
                    checkSellersAndBuyers(values, sellers, buyers)
                        ? nextForm((prevValue) => prevValue + 1)
                        : setErrorStatus(true);
                }}
                validationSchema={statusValidationSchema}
            >
                {({ values, errors, handleChange, touched }) => (
                    <Form>
                        <div className="border rounded px-3 pt-2 ">
                            <div className="row mb-md-2 mb-sm-1 ">
                                <div className="form-outline d-flex justify-content-center">
                                    <Field
                                        className="w-50 border rounded"
                                        as="select"
                                        name="legalOrRealPerson"
                                        values={values.legalOrRealPerson}
                                        style={{ height: '3.5vmin' }}
                                    >
                                        <option value="ger??ek">
                                            Ger??ek Ki??i
                                        </option>
                                        <option value="t??zel">
                                            T??zel Ki??i
                                        </option>
                                    </Field>
                                </div>
                                <div className="form-outline d-flex justify-content-center">
                                    <FormElement
                                        as={'input'}
                                        placeholder={'TC Kimlik Numaras??'}
                                        name={'TCNumber'}
                                        values={values.TCNumber}
                                        errors={errors.TCNumber}
                                        touched={touched.TCNumber}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline d-flex justify-content-center">
                                    <FormElement
                                        as={'input'}
                                        placeholder={'Cep Telefonu Numaras??'}
                                        name={'phoneNumber'}
                                        values={values.phoneNumber}
                                        errors={errors.phoneNumber}
                                        touched={touched.phoneNumber}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline d-flex justify-content-center">
                                    <FormElement
                                        as={'input'}
                                        placeholder={'Referans Kodu'}
                                        name={'referenceCode'}
                                        values={values.referenceCode}
                                        errors={errors.referenceCode}
                                        touched={touched.referenceCode}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <Button children={'G??nder'}></Button>
                                </div>
                                {errorStatus ? (
                                    <ErrorMessages error="E??le??en kullan??c?? bulunamad?? l??tfen TC Kimlik Numaran??z?? do??ru girdi??iniz emin olunuz." />
                                ) : null}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default StatusForm;
