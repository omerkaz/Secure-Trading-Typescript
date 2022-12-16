import { Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Button from '@components/button/Button';

import {
    generateReferenceCode,
    generateSmsCode,
} from '@utils/codeGenerator/generateCode';
import { sellerFormInitialValues as initialValues } from '@utils/formsInitialValue/initialValues';
import { sellerValidationSchema } from '@utils/yup/sellerValidationSchema';

import FormElement from '../../../components/form/FormElement';
import { createSellerApplication } from '../sellerApplicationSlice';
import StatementText from './StatementText';

interface Props {
    nextForm: Dispatch<SetStateAction<number>>;
}

type Seller = Yup.InferType<typeof sellerValidationSchema>;

function SellerForm({ nextForm }: Props) {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: Seller) => {
                // create sms and reference code and dispatch value, sms and reference code to seller application's  object
                dispatch(
                    createSellerApplication({
                        values,
                        SMSCode: generateSmsCode(),
                        referenceCode: generateReferenceCode(),
                    }),
                );
                // increase state for going to sms confirmation
                nextForm((prevValue) => prevValue + 1);
            }}
            validationSchema={sellerValidationSchema}
        >
            {({ values, errors, handleChange, touched }) => (
                <Form>
                    <div className="border rounded px-3 pt-2">
                        <div className="row mb-md-2 mb-sm-1">
                            <div className="col-md-6 col-sm-12 mt-2">
                                <div className="form-outline">
                                    <Field
                                        className="w-100 border rounded"
                                        as="select"
                                        name="legalOrRealPerson"
                                        values={values.legalOrRealPerson}
                                        style={{ height: '3.5vmin' }}
                                    >
                                        <option value="gerçek">
                                            Gerçek Kişi
                                        </option>
                                        <option value="tüzel">
                                            Tüzel Kişi
                                        </option>
                                    </Field>
                                </div>
                            </div>
                            <FormElement
                                as={'input'}
                                placeholder={'Tc Kimlik Numarası'}
                                name={'TCNumber'}
                                values={values.TCNumber}
                                errors={errors.TCNumber}
                                touched={touched.TCNumber}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="row mb-md-3 mb-sm-1">
                            <FormElement
                                as={'input'}
                                placeholder={'İsim Soyisim'}
                                name={'fullName'}
                                values={values.fullName}
                                errors={errors.fullName}
                                touched={touched.fullName}
                                handleChange={handleChange}
                            />
                            <FormElement
                                as={'input'}
                                placeholder={'Satıcı Telefon Numarası'}
                                name={'sellerPhoneNumber'}
                                values={values.sellerPhoneNumber}
                                errors={errors.sellerPhoneNumber}
                                touched={touched.sellerPhoneNumber}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="row mb-md-3 mb-sm-1">
                            <FormElement
                                as={'input'}
                                placeholder={'Satıcı Email'}
                                name={'sellerEmail'}
                                values={values.sellerEmail}
                                errors={errors.sellerEmail}
                                touched={touched.sellerEmail}
                                handleChange={handleChange}
                            />

                            <FormElement
                                as={'input'}
                                placeholder={'Alıcı Telefon Numarası'}
                                name={'buyerPhoneNumber'}
                                values={values.buyerPhoneNumber}
                                errors={errors.buyerPhoneNumber}
                                touched={touched.buyerPhoneNumber}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="row mb-md-3 mb-sm-1">
                            <FormElement
                                as={'input'}
                                placeholder={'Alıcı Email'}
                                name={'buyerEmail'}
                                values={values.buyerEmail}
                                errors={errors.buyerEmail}
                                touched={touched.buyerEmail}
                                handleChange={handleChange}
                            />
                            <FormElement
                                as={'input'}
                                placeholder={'Satıcı IBAN'}
                                name={'sellerIBAN'}
                                values={values.sellerIBAN}
                                errors={errors.sellerIBAN}
                                touched={touched.sellerIBAN}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="row mb-md-3 mb-sm-1">
                            <FormElement
                                as={'input'}
                                placeholder={'Araç Plaka Numarası'}
                                name={'vehicleNumber'}
                                values={values.vehicleNumber}
                                errors={errors.vehicleNumber}
                                touched={touched.vehicleNumber}
                                handleChange={handleChange}
                            />
                            <FormElement
                                as={'input'}
                                placeholder={'Satış Tutarı'}
                                name={'price'}
                                values={values.price}
                                errors={errors.price}
                                touched={touched.price}
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="border rounded px-3 pt-2">
                        <StatementText
                            name={['consentTextKVKK', 'consentTextCompany']}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <Button children={'Gönder'}></Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default SellerForm;
