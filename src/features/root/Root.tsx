import { Outlet } from 'react-router-dom';

import './Root.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Root = () => {
    return (
        <div className="mainOutline">
            <Navbar />
            <main className="container my-4 border pt-4 pb-4 border-3 rounded main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;
