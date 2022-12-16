import { Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Button from '@components/button/Button';
import ErrorMessages from '@components/errorMessages/ErrorMessages';
import FormElement from '@components/form/FormElement';

import { changeBuyerApplicationAfterCanceled } from '@features/buyer/buyerApplicationSlice';
import { changeSellerApplicationAfterCanceled } from '@features/seller/sellerApplicationSlice';

import { generateSmsCode } from '@utils/codeGenerator/generateCode';
import { cancelFormInitialValues as initialValues } from '@utils/formsInitialValue/initialValues';
import { cancelValidationSchema } from '@utils/yup/cancelValidationSchema';

import {
    createCanceledCustomer,
    getBuyers,
    getSellers,
    takeMatchedCustomer,
} from '../applicationCancelSlice';

interface IProps {
    nextForm: Dispatch<SetStateAction<number>>;
}
type TCancel = Yup.InferType<typeof cancelValidationSchema>;

function CancelForm({ nextForm }: IProps) {
    const [errorStatus, setErrorStatus] = useState(false);
    const dispatch = useDispatch();
    const sellers = useSelector(getSellers);
    const buyers = useSelector(getBuyers);

    const checkSellersAndBuyers = (
        values: TCancel,
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
                    isCanceled: true,
                }),
            );
            dispatch(
                createCanceledCustomer({ values, SMSCode: generateSmsCode() }),
            );
            dispatch(
                changeSellerApplicationAfterCanceled({
                    TCNumber: checkedSellers[0].TCNumber,
                }),
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
                    isCanceled: true,
                }),
            );
            dispatch(
                createCanceledCustomer({ values, SMSCode: generateSmsCode() }),
            );
            dispatch(
                changeBuyerApplicationAfterCanceled({
                    TCNumber: checkedBuyers[0].TCNumber,
                }),
            );
            return true;
        }
        return false;
    };

    return (
        <div>
            <p className="text-center fs-4 mb-0 fw-bold">
                BAŞVURU İPTAL BİLGİLERİ
            </p>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: TCancel) => {
                    checkSellersAndBuyers(values, sellers, buyers)
                        ? nextForm((prevValue) => prevValue + 1)
                        : setErrorStatus(true);
                }}
                validationSchema={cancelValidationSchema}
            >
                {({ values, errors, handleChange, touched }) => (
                    <Form>
                        <div className="border rounded px-3 pt-2 ">
                            <div className="row mb-md-2 mb-sm-1 ">
                                <div className="form-outline d-flex justify-content-center">
                                    <Field
                                        className="w-50 border rounded h-100"
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
                                <div className="form-outline d-flex justify-content-center">
                                    <FormElement
                                        as={'input'}
                                        placeholder={'TC Kimlik Numarası'}
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
                                        placeholder={'Cep Telefonu Numarası'}
                                        name={'phoneNumber'}
                                        values={values.phoneNumber}
                                        errors={errors.phoneNumber}
                                        touched={touched.phoneNumber}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline d-flex justify-content-center">
                                    <FormElement
                                        as={'textarea'}
                                        placeholder={'İptal Nedeni'}
                                        name={'cancelMessage'}
                                        values={values.cancelMessage}
                                        errors={errors.cancelMessage}
                                        touched={touched.cancelMessage}
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
                                    <Button children={'Gönder'}></Button>
                                </div>
                                {errorStatus ? (
                                    <ErrorMessages error="Eşleşen kullanıcı bulunamadı lütfen TC Kimlik Numaranızı doğru girdiğiniz emin olunuz." />
                                ) : null}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CancelForm;
