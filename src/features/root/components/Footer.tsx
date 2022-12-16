import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        // <!-- Footer -->
        <footer className="text-center text-lg-start">
            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3 pt-4">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bolder mb-4">
                                Secure Trading
                            </h6>
                            <p>
                                Firmamız, alıcılar ve satıcılar arasında güvenli
                                ve adil bir ticaret ortamı oluşturur. Bu sayede,
                                her iki taraf da memnun kalarak, ticaretin daha
                                da büyümesine katkıda bulunur.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>

                            <Link
                                className="text-reset fs-6"
                                to={'sellerapplication'}
                            >
                                Satıcı Başvurusu Oluştur
                            </Link>
                            <hr></hr>

                            <Link
                                className="text-reset fs-6"
                                to={'buyerapplication'}
                            >
                                Alıcı Başvurusu Oluştur
                            </Link>
                            <hr></hr>

                            <Link
                                className="text-reset fs-6"
                                to={'applicationstatus'}
                            >
                                Başvuru Durum Sorgula
                            </Link>
                            <hr></hr>

                            <Link
                                className="text-reset fs-6"
                                to={'applicationcancel'}
                            >
                                Başvuru İptal
                            </Link>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Help
                                </a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <i className="fas fa-home me-3 text-secondary"></i>{' '}
                                New York, NY 10012, US
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3 text-secondary"></i>{' '}
                                + 01 234 567 88
                            </p>
                            <p>
                                <i className="fas fa-print me-3 text-secondary"></i>{' '}
                                + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div
                className="text-center p-4"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
            >
                © 2022 Copyright ST
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        // <!-- Footer -->
    );
}

export default Footer;
