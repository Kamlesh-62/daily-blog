'use client';
import React, { JSX } from 'react';
import LoginForm from '@/components/Auth/Login/LoginForm';

export default function LoginPage(): JSX.Element {
    return (
        <section className="flex justify-center items-center min-h-screen">
            <LoginForm />
        </section>
    )
}