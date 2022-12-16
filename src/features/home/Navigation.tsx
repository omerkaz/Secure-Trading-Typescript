import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="row">
            <div className="row justify-content-center mb-2">
                <div className="col-xs-6 col-md-6">
                    <Link className="btn btn-dark w-100" to={'sellerapplication'}>
                        Satıcı Başvurusu Oluştur
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center mb-2">
                <div className="col-xs-6 col-md-6">
                    <Link className="btn btn-dark w-100" to={'buyerapplication'}>
                        Alıcı Başvurusu Oluştur
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center mb-2">
                <div className="col-xs-6 col-md-6">
                    <Link className="btn btn-dark w-100" to={'applicationstatus'}>
                        Başvuru Durum Sorgula
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-6 col-md-6">
                    <Link className="btn btn-dark w-100" to={'applicationcancel'}>
                        Başvuru İptal
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
