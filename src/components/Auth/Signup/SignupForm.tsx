'use client';
import React, { JSX, useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { redirect } from "next/navigation";
import * as Yup from 'yup';
import { InputField } from "@/components/ui/inputField/inputField";
import { ContainedButton, OutlinedButton } from "@/components/ui//buttons/buttons";
import Image from 'next/image';
import { handleSignInWithGoogle, signupWithEmailAndPassword } from '@/libs/supabase/loginActions';
// importing assets
import googleLogo from '@/assets/login/google.png';

type SignupValues = {
    email: string;
    password: string;
}

export default function SignupForm(): JSX.Element {

    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    // initializing form
    const initialValues: SignupValues = {
        email: '',
        password: ''
    };

    // validating form
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    // handle form submission
    const handleSubmit = async (
        values: SignupValues,
        { setSubmitting }: FormikHelpers<SignupValues>
    ): Promise<void> => {
        try {
            const response = await signupWithEmailAndPassword(values);
            if (response.success) {
                redirect("/")
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Sign-up failed:", error.message);
            } else {
                console.error("Unknown error during sign-up:", error);
            }
        } finally {
            setSubmitting(false);
        }
    };

    // initializing formik
    const formik = useFormik<SignupValues>({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    // login with google
    const handleSignInWithGoogleFun = async (): Promise<void> => {
        try {
            const result = await handleSignInWithGoogle();

            if (result.data?.url) {
                window.location.href = result.data.url;
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : "Unknown error";
            setErrorMessage(message);
        }
    };


    return (
        <div className="flex justify-center items-center ">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Sign up</h1>
                    <p className="text-gray-500">Hi, welcome 👋</p>
                </div>
                <div className="my-4 ">
                    <OutlinedButton type="button" className="flex items-center justify-center w-full" onClick={handleSignInWithGoogleFun}>
                        <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
                        <span className="ml-2">Sign up with Google</span>
                    </OutlinedButton>
                </div>
                <div className="my-4 ">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                        </div>
                    </div>
                </div>
                <div>
                    {/* The form's onSubmit is now handled by formik.handleSubmit */}
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div>
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
                            // disabled={formik.isSubmitting || !formik.isValid}
                            className="w-full mt-6 py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
                        </ContainedButton>
                    </form>
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
                {errorMessage && (
                    <div className="mt-4">
                        <p className="text-red-500">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    )
}