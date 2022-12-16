import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMatchedSeller } from '@features/buyer/buyerApplicationSlice';

function TransactionInformation() {
    const seller = useSelector(getMatchedSeller);
    return (
        <div className="card border-0" style={{ width: '25rem' }}>
            <div className="card-body border rounded">
                <select className="w-100 border p-2 rounded" id="pet-select">
                    <option value="">Banka Hesabı seçiniz...</option>
                    <option value="">TR5613216556161231236</option>
                    <option value="">TR5613216556161231236</option>
                    <option value="">TR5613216556161231236</option>
                </select>
                <hr></hr>
                <div className="mt-2">
                    <p className="card-text fw-bold mb-0">
                        TRANSFER YAPILACAK ALICI ÜNVANI
                    </p>
                    <p className="card-text">{seller.fullName}</p>
                    <p className="card-text fw-bold mb-0">
                        TRANSFER AÇIKLAMASI
                    </p>
                    <p className="card-text">{seller.referenceCode}</p>
                    <p className="card-text fw-bold mb-0">TRANSFER TUTARI</p>
                    <p className="card-text ">{seller.price}TL</p>
                    <p className="card-text fw-bold mb-0">MASRAF TUTARI</p>
                    <p className="card-text">13,90TL</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-success" to={'/'}>
                        Tamam
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TransactionInformation;
