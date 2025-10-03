// app/components/LoginModalClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/layout/Modal';
import LoginForm from '@/components/Auth/Login/LoginForm';

export default function LoginModalClient() {
    const r = useRouter();
    return (
        <Modal onClose={() => r.back()} backdrop="blur">
            <LoginForm />
        </Modal>
    );
}
