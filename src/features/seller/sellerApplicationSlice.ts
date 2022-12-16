import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        referenceCode: '1',
        SMSCode: '1',
        legalOrRealPerson: 'gerçek',
        fullName: '1',
        sellerEmail: '1',
        buyerEmail: '1',
        vehicleNumber: '1',
        TCNumber: '1',
        sellerPhoneNumber: '1',
        buyerPhoneNumber: '1',
        sellerIBAN: '1',
        price: '1',
        consentTextKVKK: false,
        consentTextCompany: false,
        isBuyerApply: false,
        isCanceled: false,
    },
];

const sellerApplicationSlice = createSlice({
    name: 'sellers',
    initialState: {
        sellers: initialState,
    },
    reducers: {
        createSellerApplication: (state, action) => {
            action.payload.values.SMSCode = action.payload.SMSCode;
            action.payload.values.referenceCode = action.payload.referenceCode;
            action.payload.values.isBuyerApply = false;
            action.payload.values.isCanceled = false;
            state.sellers = [...state.sellers, action.payload.values];
        },
        changeSellerApplicationAfterBuyerApply: (state, action) => {
            const selectedSeller = state.sellers.filter(
                (seller) =>
                    seller.referenceCode === action.payload.referenceCode,
            );
            selectedSeller[0].isBuyerApply = true;
        },
        changeSellerApplicationAfterCanceled: (state, action) => {
            const selectedSeller = state.sellers.filter(
                (seller) => seller.TCNumber === action.payload.TCNumber,
            );
            const copySelectedSeller = {...selectedSeller[0]}
            copySelectedSeller.isCanceled = true;
            state.sellers.pop()
            state.sellers = [...state.sellers, copySelectedSeller]
        },
    },
});

export const getSmsCode = (state: any) => {
    return state.sellers.sellers[state.sellers.sellers.length - 1].SMSCode;
};
export const getSellers = (state: any) => {
    return state.sellers.sellers;
};
export const {
    createSellerApplication,
    changeSellerApplicationAfterBuyerApply,
    changeSellerApplicationAfterCanceled,
} = sellerApplicationSlice.actions;

export default sellerApplicationSlice.reducer;
