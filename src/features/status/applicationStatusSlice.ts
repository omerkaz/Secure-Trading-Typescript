import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        SMSCode: '1',
        referenceCode: '1',
        legalOrRealPerson: 'gerçek',
        TCNumber: '1',
        phoneNumber: '1',
    },
];

const sellerApplicationSlice = createSlice({
    name: 'status',
    initialState: {
        sellersOrBuyer: initialState,
        matchedCustomer: [],
    },
    reducers: {
        createStatusInformation: (state, action) => {
            action.payload.values.SMSCode = action.payload.SMSCode;
            state.sellersOrBuyer = [
                ...state.sellersOrBuyer,
                action.payload.values,
            ];
        },
        takeMatchedCustomer: (state, action) => {
            state.matchedCustomer = {
                ...action.payload.checkedCustomer[0],
                isSeller: action.payload.isSeller,
            };
        },
    },
});

export const getSmsCode = (state: any) => {
    return state.status.sellersOrBuyer[state.status.sellersOrBuyer.length - 1]
        .SMSCode;
};
export const getSellers = (state: any) => {
    return state.sellers.sellers;
};
export const getBuyers = (state: any) => {
    return state.buyers.buyersInformation;
};
export const getMatchedCustomer = (state: any) => {
    return state.status.matchedCustomer;
};
export const { createStatusInformation, takeMatchedCustomer } =
    sellerApplicationSlice.actions;

export default sellerApplicationSlice.reducer;
