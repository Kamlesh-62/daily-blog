// app/components/LoginModalClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/layout/Modal';
import SignupForm from '@/components/Auth/Signup/SignupForm';

export default function SignupModalClient() {
    const r = useRouter();
    return (
        <Modal onClose={() => r.back()} backdrop="blur">
            <SignupForm />
        </Modal>
    );
}
