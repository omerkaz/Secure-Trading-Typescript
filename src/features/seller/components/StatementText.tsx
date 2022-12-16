import { Field, FormikErrors, FormikTouched } from 'formik';
import { Value } from '../type/statementTextTypes';
import ErrorMessages from '@components/errorMessages/ErrorMessages';
interface Props {
    name: string[];
    values: { consentTextKVKK: boolean; consentTextCompany: boolean };
    errors: FormikErrors<Value>;
    touched: FormikTouched<Value>;
    handleChange: any;
}

function StatementText({ name, values, errors, touched, handleChange }: Props) {
    return (
        <>
            <label className='mb-3 d-block'>
                <Field
                    className="me-1"
                    type="checkbox"
                    name={name[0]}
                    values={values.consentTextKVKK.toString()}
                    onChange={handleChange}
                />
                Tarafıma hizmet sunulması amacıyla, bulut tabanlı yazılımların
                yurt dışında tutulması nedeniyle kişisel verilerimin yurt dışına
                aktarılmasına ilişkin Açık Rıza Metni'ni okudum. Kişisel
                verilerimin bu kapsamda aktarılmasına onay veriyorum.
                {errors.consentTextKVKK && touched.consentTextKVKK ? (
                    <ErrorMessages error={errors.consentTextKVKK} />
                ) : null}
            </label>
            <label className='mb-3 d-block'>
                <Field
                    className="me-1"
                    type="checkbox"
                    name={name[1]}
                    values={values.consentTextCompany.toString()}
                    onChange={handleChange}
                />
                TURK Elektronik Para A.Ş. tarafından; yukarıda yer alan iletişim
                bilgilerime, bilgilendirme, mal ve hizmet tanıtımı, reklam ve
                promosyon gibi amaçlarla yararlı olabilecek içeriklere
                ulaşabilmem için ticari elektronik ileti gönderilmesini her
                zaman reddetme hakkımın saklı olduğunu bilerek onay veriyorum.
                {errors.consentTextCompany && touched.consentTextCompany ? (
                    <ErrorMessages error={errors.consentTextCompany} />
                ) : null}
            </label>
            <span className='mb-3 d-block'>
                Kişisel verileriniz talebinizin gerçekleştirilmesi amacıyla 6698 Sayılı Kanun kapsamında işlenmektedir. Aydınlatma Metnine <b>buradan</b> ulaşabilirsiniz.
            </span>
        </>
    );
}

export default StatementText;