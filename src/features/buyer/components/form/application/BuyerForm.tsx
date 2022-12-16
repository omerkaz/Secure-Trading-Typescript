import { Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Button from '@components/button/Button';
import FormElement from '@components/form/FormElement';

import { generateSmsCode } from '@utils/codeGenerator/generateCode';
import { buyerFormInitialValues as initialValues } from '@utils/formsInitialValue/initialValues';
import { buyerValidationSchema } from '@utils/yup/buyerValidationSchema';

import {
    createBuyerApplication,
    getReferenceCode,
} from '../../../buyerApplicationSlice';
import SellerInformation from './SellerInformation';

interface IProps {
    nextForm: Dispatch<SetStateAction<number>>;
}
type TBuyer = Yup.InferType<typeof buyerValidationSchema>;

function BuyerForm({ nextForm }: IProps) {
    const dispatch = useDispatch();
    // take reference code in matched seller for put in buyer ınformation object
    const sellerReferenceCode = useSelector(getReferenceCode);
    return (
        <div>
            <p className="text-center fs-4 mb-0">Satıcı Bilgileri</p>
            <div className="d-flex justify-content-center border">
                <SellerInformation />
            </div>
            <p className="text-center fs-4 mb-0">Alıcı Bilgileri</p>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: TBuyer) => {
                    dispatch(
                        createBuyerApplication({
                            values,
                            SMSCode: generateSmsCode(),
                            referenceCode: sellerReferenceCode,
                        }),
                    );
                    nextForm((prevValue) => prevValue + 1);
                }}
                validationSchema={buyerValidationSchema}
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
                                        <option value="gerçek">
                                            Gerçek Kişi
                                        </option>
                                        <option value="tüzel">
                                            Tüzel Kişi
                                        </option>
                                    </Field>
                                </div>
                                <div className="form-outline mt-2 d-flex justify-content-center">
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
                                <div className="form-outline mt-2 d-flex justify-content-center">
                                    <FormElement
                                        as={'input'}
                                        placeholder={'İsim Soyisim'}
                                        name={'fullName'}
                                        values={values.fullName}
                                        errors={errors.fullName}
                                        touched={touched.fullName}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline my-2 d-flex justify-content-center">
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
                                <div className="d-flex justify-content-center mt-2">
                                    <Button children={'Gönder'}></Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BuyerForm;
