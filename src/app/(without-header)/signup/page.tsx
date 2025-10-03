'use client';
import React, { JSX, useState } from 'react';
import SignupForm from '@/components/Auth/Signup/SignupForm';

export default function Page(): JSX.Element {
    return (
        <section className="flex justify-center items-center min-h-screen">
            <SignupForm />
        </section>
    )
}