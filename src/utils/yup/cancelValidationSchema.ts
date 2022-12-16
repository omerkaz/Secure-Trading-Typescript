import * as Yup from 'yup';

export const cancelValidationSchema = Yup.object({
    legalOrRealPerson: Yup.string().required(),
    phoneNumber: Yup.string().required('İsim ve soyisim giriniz!'),
    TCNumber: Yup.string().required('TC Kimlik No giriniz!'),
    referenceCode: Yup.string().required('Bu alan boş bırakılamaz!'),
});
