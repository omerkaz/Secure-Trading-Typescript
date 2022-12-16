import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { Field } from 'formik';

import FormElement from '@components/form/FormElement';

describe('FormElement elements renders correctly', () => {
    test('snapshot test', () => {
        const componentTree = render(
            <Formik
                initialValues={{ testName: '' }}
                onSubmit={(values: FormikValues) => {}}
            >
                {({ values, errors, handleChange, touched }) => (
                    <Form>
                        <FormElement
                            placeholder={'TEST PLACEHOLDER'}
                            name={'testNAME'}
                            values={values.testName}
                            errors={errors.testName}
                            touched={touched.testName}
                            handleChange={handleChange}
                            as={'input'}
                        />
                    </Form>
                )}
            </Formik>,
        );
        expect(componentTree).toMatchSnapshot();
    });

    test('elements test', () => {
        render(
            <Formik
                initialValues={{ testName: '' }}
                onSubmit={(values: FormikValues) => {}}
            >
                {({ values, errors, handleChange, touched }) => (
                    <Form>
                        <FormElement
                            placeholder={'TEST PLACEHOLDER'}
                            name={'testNAME'}
                            values={values.testName}
                            errors={errors.testName}
                            touched={touched.testName}
                            handleChange={handleChange}
                            as={'input'}
                        />
                    </Form>
                )}
            </Formik>,
        );
        const input = screen.getByText('TEST PLACEHOLDER');
        expect(input).toBeInTheDocument();
    });
});
