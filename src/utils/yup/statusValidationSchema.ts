import * as Yup from 'yup';

export const statusValidationSchema = Yup.object({
    legalOrRealPerson: Yup.string().required(),
    TCNumber: Yup.string().required('TC Kimlik No giriniz!'),
    phoneNumber: Yup.string().required('Bu alan boş bırakılamaz!'),
    referenceCode : Yup.string().required('Bu alan boş bırakılamaz!'),
});
