import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <header className="border-bottom border-dark py-2 header">
            <Link
                className="text-center fw-bold brand text-decoration-none text-dark"
                to={'/'}
            >
                <h1>Secure Trading</h1>
            </Link>
            <h3 className="text-center fs-6 brand font">Sizin için...</h3>
        </header>
    );
}

export default Navbar;
