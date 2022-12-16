import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        SMSCode: '1',
        legalOrRealPerson: 'gerçek',
        fullName: '1',
        TCNumber: '1',
        buyerPhoneNumber: '1',
        isCanceled: false
    },
];

const buyerApplicationSlice = createSlice({
    name: 'buyers',
    initialState: {
        buyersInformation: initialState,
        matchedSeller: [],
        matchedSellerReferenceCode: ''
    },
    reducers: {
        createBuyerApplication: (state, action) => {
            action.payload.values.SMSCode = action.payload.SMSCode;
            action.payload.values.isCanceled = false
            // seller reference code put in buyer ınformation object
            action.payload.values.referenceCode = action.payload.referenceCode
            state.buyersInformation = [
                ...state.buyersInformation,
                action.payload.values,
            ];
        },
        // take seller matching with buyer for transaction information and seller information
        takeMatchedSeller: (state, action) => {
            const copySelectedSeller = { ...action.payload.selectedSeller[0] };
            copySelectedSeller.isBuyerApply = true;
            state.matchedSeller = copySelectedSeller;
        },
        // taking reference code for later put in buyer ınformation object
        takeReferenceCode: (state, action) => {
            state.matchedSellerReferenceCode = action.payload.referenceCode
        },
        changeBuyerApplicationAfterCanceled: (state, action) => {
            const selectedBuyer = state.buyersInformation.filter(
                (buyer) => buyer.TCNumber === action.payload.TCNumber,
            );
            const copySelectedBuyer = { ...selectedBuyer[0] }
            copySelectedBuyer.isCanceled = true;
            state.buyersInformation.pop()
            state.buyersInformation = [...state.buyersInformation, copySelectedBuyer]
        }
    },
});

export const getSmsCode = (state: any) => {
    return state.buyers.buyersInformation[
        state.buyers.buyersInformation.length - 1
    ].SMSCode;
};
export const getSellers = (state: any) => {
    return state.sellers.sellers;
};
export const getMatchedSeller = (state: any) => {
    return state.buyers.matchedSeller;
};
export const getReferenceCode = (state: any) => {
    return state.buyers.matchedSellerReferenceCode;
};
export const { 
    createBuyerApplication, 
    takeMatchedSeller, 
    takeReferenceCode, 
    changeBuyerApplicationAfterCanceled 
} = buyerApplicationSlice.actions;

export default buyerApplicationSlice.reducer;
