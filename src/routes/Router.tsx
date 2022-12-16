import { Route, Routes } from 'react-router-dom';
import Navigation from '@features/home/Navigation';
import Root from '@features/root/Root';
import SellerApplication from '@features/seller/SellerApplication';
import BuyerApplication from '@features/buyer/BuyerApplication'
import ApplicationStatus from '@features/status/ApplicationStatus';
import ApplicationCancel from '@features/cancel/ApplicationCancel';
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route path="/" element={<Navigation />} />
                <Route path="/sellerapplication" element={<SellerApplication />} /> 
                <Route path="/buyerapplication" element={<BuyerApplication />} />
                <Route path="/applicationstatus" element={<ApplicationStatus />} />
                <Route path="/applicationcancel" element={<ApplicationCancel />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
