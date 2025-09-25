'use client';
import React, { JSX } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { InputField } from "@/components/ui/inputField/inputField";
import {ContainedButton} from "@/components/ui//buttons/buttons";
type LoginValues = {
    email: string;
    password: string;
}

export default function Page(): JSX.Element {

    // 1. Initial values for the form fields
    const initialValues: LoginValues = {
        email: '',
        password: ''
    };

    // 2. Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    // 3. Form submission handler
    const handleSubmit = (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
        console.log('Form data', values);

    };

    // 4. useFormik hook to manage form state, validation, and submission
    const formik = useFormik<LoginValues>({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });


    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex justify-center items-center">
                <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
                        <p className="text-gray-500">Hi, Welcome back 👋</p>
                    </div>
                    <div>
                        {/* The form's onSubmit is now handled by formik.handleSubmit */}
                        <form onSubmit={formik.handleSubmit} noValidate>
                            <div className="space-y-4">
                                {/* Each InputField is now connected to Formik's state */}
                                <InputField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.email}
                                    touched={formik.touched.email}
                                />

                                <InputField
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.password}
                                    touched={formik.touched.password}
                                />
                            </div>

                            <ContainedButton
                                type="submit"
                                disabled={formik.isSubmitting || !formik.isValid}
                                className="w-full mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formik.isSubmitting ? 'Logging in...' : 'Login'}
                            </ContainedButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}