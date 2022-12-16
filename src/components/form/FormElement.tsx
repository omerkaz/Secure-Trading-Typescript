import { Field } from 'formik';

interface Props {
    placeholder: string;
    name: string;
    values: string;
    errors: string | undefined;
    touched: boolean | undefined;
    handleChange: any;
    as: string;
}
function FormElement({
    placeholder,
    name,
    values,
    errors,
    touched,
    handleChange,
    as,
}: Props) {
    return (
        <div className="col-md-6 col-sm-12 mt-2">
            <div className="form-outline">
                <label className="d-md-none d-sm-block text-center mb-1">
                    {placeholder}
                </label>
                <Field
                    as={as}
                    className="w-100 border rounded"
                    placeholder={placeholder}
                    name={name}
                    values={values}
                    onChange={handleChange}
                    style={{ height: '3.5vmin' }}
                />

                {errors && touched ? (
                    <div className="fw-light text-danger">{errors}</div>
                ) : null}
            </div>
        </div>
    );
}

export default FormElement;
