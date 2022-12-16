import { useEffect, useState } from 'react';

import SuccessCard from '@components/cards/SuccessCard';
import SMSConfirmation from '@components/SMSConfirmation/SMSConfirmation';

import { useMultiStepForm } from '@utils/customHooks/useMultiStepForm';

import { getSmsCode } from './applicationCancelSlice';
import CancelForm from './components/CancelForm';

function ApplicationCancel() {
    // state for next form
    const [index, setIndex] = useState(0);
    // custom hook for multi step form
    const { step, next } = useMultiStepForm([
        <CancelForm nextForm={setIndex} />,
        <SMSConfirmation nextForm={setIndex} getSmsCode={getSmsCode} />,
        <SuccessCard header="İptal İşlemi Tamamlandı.">
            Başvurunuz iptal edilmiştir.
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

export default ApplicationCancel;
