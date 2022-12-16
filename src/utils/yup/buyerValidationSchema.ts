import * as Yup from 'yup';

export const buyerValidationSchema = Yup.object({
    legalOrRealPerson: Yup.string().required(),
    fullName: Yup.string().required('İsim ve soyisim giriniz!'),
    TCNumber: Yup.string().required('TC Kimlik No giriniz!'),
    buyerPhoneNumber: Yup.string().required('Bu alan boş bırakılamaz!'),
});
