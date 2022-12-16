import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    getBuyers,
    getMatchedCustomer,
    getSellers,
} from '../applicationStatusSlice';

function StatusInformation() {
    const currentCustomer = useSelector(getMatchedCustomer);
    const buyers = useSelector(getBuyers);
    const sellers = useSelector(getSellers);
    // if the current customer is a seller this is rendered
    if (currentCustomer.isSeller) {
        const matchedBuyer = buyers.filter(
            (buyer: any) =>
                buyer.referenceCode === currentCustomer.referenceCode,
        );
        return (
            <div className="card border-0">
                <div className="card-body border rounded">
                    <p className="card-text fw-bold mb-0">
                        BAŞVURU DURUM BİLGİLERİ
                    </p>
                    <hr></hr>
                    <div className="mt-2">
                        <p className="card-text fw-bold mb-0">
                            Referans No :{' '}
                            <span className="fw-normal">
                                {currentCustomer.referenceCode}
                            </span>
                        </p>
                        <p className="card-text fw-bold mb-0">
                            Alıcı Başvuru Durumu :{' '}
                            <span className="fw-normal">
                                {matchedBuyer[0]?.isCanceled
                                    ? 'Alıcı başvurusu iptal edildi.'
                                    : currentCustomer.isBuyerApply
                                    ? 'Alıcı başvurusu yapıldı.'
                                    : 'Alıcı başvurusu bekleniyor.'}
                            </span>
                        </p>

                        <p className="card-text fw-bold mb-0">
                            Ödeme Durum Bilgisi :{' '}
                            <span className="fw-normal">
                                Alıcıdan ödeme bekleniyor.
                            </span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link className="btn btn-success" to={'/'}>
                            Tamam
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const matchedSeller = sellers.filter(
        (seller: any) => seller.referenceCode === currentCustomer.referenceCode,
    );
    // if the current customer is a buyer this is rendered
    return (
        <div className="card border-0" style={{ width: '26rem' }}>
            <div className="card-body border rounded">
                <p className="card-text fw-bold mb-0">
                    BAŞVURU DURUM BİLGİLERİ
                </p>
                <hr></hr>
                <div className="mt-2">
                    <p className="card-text fw-bold mb-0">
                        Referans No :{' '}
                        <span className="fw-normal">
                            {currentCustomer.referenceCode}
                        </span>
                    </p>
                    <p className="card-text"></p>
                    <p className="card-text fw-bold mb-0">
                        Satıcı Başvuru Durumu :
                        <span className="fw-normal">
                            {matchedSeller[0]?.isCanceled
                                ? ' Satıcı başvurusu iptal edildi.'
                                : ' Satıcı başvurusu yapıldı.'}
                        </span>
                    </p>
                    <p className="card-text fw-bold mb-3 mt-3">
                        Ödeme Durum Bilgisi :
                    </p>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-success" to={'/'}>
                        Tamam
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StatusInformation;
