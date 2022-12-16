import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/button/Button';
import ErrorMessages from '@components/errorMessages/ErrorMessages';

import {
    getSellers,
    takeMatchedSeller,
    takeReferenceCode,
} from '@features/buyer/buyerApplicationSlice';
import { changeSellerApplicationAfterBuyerApply } from '@features/seller/sellerApplicationSlice';

interface IProps {
    nextForm: Dispatch<SetStateAction<number>>;
}
type TInitialValues = {
    referenceCode: string;
};
const initialValues = {
    referenceCode: '',
};

function ReferenceCode({ nextForm }: IProps) {
    const [errorStatus, setErrorStatus] = useState(false);
    const dispatch = useDispatch();
    const sellers = useSelector(getSellers);

    function checkReferenceCode(
        sellers: { referenceCode: string; isCanceled: boolean }[],
        values: TInitialValues,
    ) {
        const selectedSeller = sellers.filter(
            (seller) => seller.referenceCode === values.referenceCode && !(seller.isCanceled),
        );

        if (selectedSeller.length > 0) {
            dispatch(takeMatchedSeller({ selectedSeller }));
            dispatch(
                changeSellerApplicationAfterBuyerApply({
                    referenceCode: values.referenceCode,
                }),
            );
            dispatch(
                takeReferenceCode({ referenceCode: values.referenceCode }),
            );

            return true;
        }

        return false;
    }

    return (
        <div className="w-50">
            <div>
                <div className="text-center mb-3 fw-bolder fs-3">
                    Referans Kodu Giriniz.
                </div>
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values: TInitialValues) => {
                            checkReferenceCode(sellers, values)
                                ? nextForm((prevValue) => prevValue + 1)
                                : setErrorStatus(true);
                        }}
                    >
                        <Form>
                            <div className="form-outline mb-4">
                                <Field
                                    className="form-control"
                                    name="referenceCode"
                                    placeholder="Referans Kodu"
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
            </div>
            <div className="card border-0 mt-3 w-75" style={{ width: '25rem' }}>
                <div className="card-body p-0">
                    <p className="card-text">Referans Kodları:</p>
                    {sellers.map(
                        (
                            seller: {
                                referenceCode: string;
                                isCanceled: boolean;
                            },
                            index: number,
                        ) =>
                            seller.isCanceled ? null : (
                                <li key={index} className="card-text">
                                    {seller.referenceCode}
                                </li>
                            ),
                    )}
                </div>
            </div>
        </div>
    );
}

export default ReferenceCode;
