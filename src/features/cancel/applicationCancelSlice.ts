import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        SMSCode: '1',
        legalOrRealPerson: 'gerçek',
        TCNumber: '1',
        referenceCode: '1',
        phoneNumber: '1',
        cancelMessage: '1',
    },
];

const sellerApplicationSlice = createSlice({
    name: 'cancel',
    initialState: {
        canceledCustomer: initialState,
        matchedCustomer: [],
    },
    reducers: {
        createCanceledCustomer: (state, action) => {
            action.payload.values.SMSCode = action.payload.SMSCode;
            state.canceledCustomer = [
                ...state.canceledCustomer,
                action.payload.values,
            ];
        },
        takeMatchedCustomer: (state, action) => {
            state.matchedCustomer = {
                ...action.payload.checkedCustomer[0],
                isCanceled: action.payload.isCanceled,
            };
        },
    },
});

export const getSmsCode = (state: any) => {
    return state.cancel.canceledCustomer[state.cancel.canceledCustomer.length - 1]
        .SMSCode;
};
export const getSellers = (state: any) => {
    return state.sellers.sellers;
};
export const getBuyers = (state: any) => {
    return state.buyers.buyersInformation;
};
export const getMatchedCustomer = (state: any) => {
    return state.cancel.matchedCustomer;
};
export const { createCanceledCustomer, takeMatchedCustomer } =
    sellerApplicationSlice.actions;

export default sellerApplicationSlice.reducer;
