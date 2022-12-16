import { useSelector } from 'react-redux';

import { getMatchedSeller } from '@features/buyer/buyerApplicationSlice';

function SellerInformation() {
    const seller = useSelector(getMatchedSeller);
    return (
        <div className="card border-0" style={{ width: '30vw' }}>
            <div className="card-body">
                <p className="card-text">Referans No:{seller?.referenceCode}</p>
                <p className="card-text">Adı Soyadı: {seller?.fullName}</p>
                <p className="card-text">
                    Cep Telefonu: {seller?.sellerPhoneNumber}
                </p>
                <p className="card-text">
                    Araç Plakası: {seller?.vehicleNumber}
                </p>
                <p className="card-text">Satış Tutarı: {seller?.price}</p>
            </div>
        </div>
    );
}

export default SellerInformation;
