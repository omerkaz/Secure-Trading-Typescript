import { configureStore } from '@reduxjs/toolkit';
import sellerApplicationSlice from '@features/seller/sellerApplicationSlice';
import buyerApplicationSlice from '@features/buyer/buyerApplicationSlice';
import applicationStatusSlice from '@features/status/applicationStatusSlice';
import applicationCancelSlice from '@features/cancel/applicationCancelSlice';
const store = configureStore({
    reducer: {
        sellers: sellerApplicationSlice,
        buyers: buyerApplicationSlice,
        status: applicationStatusSlice,
        cancel:applicationCancelSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


export default store;
