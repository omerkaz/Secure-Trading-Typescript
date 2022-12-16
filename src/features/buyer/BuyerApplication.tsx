import { useEffect, useState } from 'react';

import BuyerSuccessCard from '@features/buyer/components/BuyerSuccessCard';
import SMSConfirmation from '@components/SMSConfirmation/SMSConfirmation';

import ReferenceCode from '@features/buyer/components/form/ReferenceCode';

import { useMultiStepForm } from '@utils/customHooks/useMultiStepForm';

import { getSmsCode } from './buyerApplicationSlice';
import TransactionInformation from './components/TransactionInformation';
import BuyerForm from './components/form/application/BuyerForm';

function BuyerApplication() {
    // state for next form
    const [index, setIndex] = useState(0);
    // custom hook for multi step form
    const { step, next } = useMultiStepForm([
        <ReferenceCode nextForm={setIndex} />,
        <BuyerForm nextForm={setIndex} />,
        <SMSConfirmation nextForm={setIndex} getSmsCode={getSmsCode} />,
        <BuyerSuccessCard nextForm={setIndex} />,
        <TransactionInformation />,
    ]);
    // next form trigger
    useEffect(() => {
        if (index !== 0) next();
    }, [index]);

    return (
        <div className="row justify-content-center">
            <div className="col-8 p-4 d-flex justify-content-center border border-primary rounded bg-white">
                {step}
            </div>
        </div>
    );
}

export default BuyerApplication;
