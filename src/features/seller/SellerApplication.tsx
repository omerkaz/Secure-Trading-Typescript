import { useEffect, useState } from 'react';

import SMSConfirmation from '@components/SMSConfirmation/SMSConfirmation';
import SuccessCard from '@components/cards/SuccessCard';

import { useMultiStepForm } from '@utils/customHooks/useMultiStepForm';

import SellerForm from './components/SellerForm';
import { getSmsCode } from './sellerApplicationSlice';

function SellerApplication() {
    // state for next form
    const [index, setIndex] = useState(0);
    // custom hook for multi step form
    const { step, next } = useMultiStepForm([
        <SellerForm nextForm={setIndex} />,
        <SMSConfirmation nextForm={setIndex} getSmsCode={getSmsCode} />,
        <SuccessCard header="Başvuru Tamamlandı.">
            Başvuru bilgileriniz sistemde kayıtlı cep telefonunagönderilmiştir.
        </SuccessCard>,
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

export default SellerApplication;
