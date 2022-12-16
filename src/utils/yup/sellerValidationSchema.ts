import * as Yup from 'yup';

export const sellerValidationSchema = Yup.object({
    legalOrRealPerson: Yup.string().required(),
    fullName: Yup.string().required('İsim ve soyisim giriniz!'),
    sellerEmail: Yup.string()
        .required('Bu alan boş bırakılamaz!')
        .email('Geçerli bir email adresi giriniz!'),
    buyerEmail: Yup.string()
        .required('Bu alan boş bırakılamaz!')
        .email('Geçerli bir email adresi giriniz!'),
    vehicleNumber: Yup.string().required('Bu alan boş bırakılamaz!'),
    TCNumber: Yup.string().required('TC Kimlik No giriniz!'),
    sellerPhoneNumber: Yup.string().required('Bu alan boş bırakılamaz!'),
    buyerPhoneNumber: Yup.string().required('Bu alan boş bırakılamaz!'),
    sellerIBAN: Yup.string().required('Bu alan boş bırakılamaz!'),
    price: Yup.string().required('Bu alan boş bırakılamaz!'),
    consentTextKVKK: Yup.boolean().oneOf(
        [true],
        'Şartlar ve koşulları kabul etmeniz gerekiyor.',
    ),
    consentTextCompany: Yup.boolean().oneOf(
        [true],
        'Şartlar ve koşulları kabul etmeniz gerekiyor.',
    ),
});
