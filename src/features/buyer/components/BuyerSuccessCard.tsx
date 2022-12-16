import { Dispatch, SetStateAction } from 'react';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import { getMatchedSeller } from '@features/buyer/buyerApplicationSlice';

interface Props {
    nextForm: Dispatch<SetStateAction<number>>;
}
function BuyerSuccessCard({ nextForm }: Props) {
    const seller = useSelector(getMatchedSeller);
    return (
        <div className="card bg-success text-light" style={{ width: '25rem' }}>
            <TiInfoLargeOutline className="w-100 fs-1" />
            <div className="card-body">
                <h5 className="card-title">Başvuru Tamamlandı.</h5>
                <p className="card-text">
                    {seller.vehicleNumber} plakalı araç satışı için alıcı
                    kaydınız oluşturulmuştur.
                </p>
                <p className="card-text">
                    Transfer bilgileri kayıtlı cep telefonu numaranıza SMS
                    olarak gönderilmiştir.
                </p>
                <p className="card-text">
                    Araç satış bedelini, seçeceğiniz banka hesabına TRANSFER
                    BİLGİLERİM alanındaki bilgiler ile transfer etmeniz
                    gerekmektedir.
                </p>
                <p className="card-text">
                    İsterseniz, satış bedelini parça parça banka hesaplarımıza
                    TRANSFER BİLGİLERİM alanındaki bilgiler ile transfer
                    edebilirsiniz.
                </p>
                <div className="d-flex justify-content-center">
                    <button
                        onClick={() => nextForm((prevValue) => prevValue + 1)}
                        className="btn btn-primary "
                    >
                        Transfer Bilgilerimi Göster
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BuyerSuccessCard;
