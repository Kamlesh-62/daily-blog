// app/components/Modal.tsx
'use client';
import { useEffect } from 'react';

type Backdrop = 'transparent' | 'dim' | 'blur';

export default function Modal({
    children,
    onClose,
    backdrop = 'blur',
}: {
    children: React.ReactNode;
    onClose: () => void;
    backdrop?: Backdrop;
}) {
    
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    const overlay =
        backdrop === 'transparent'
            ? 'bg-transparent'
            : backdrop === 'dim'
                ? 'bg-black/50'
                : 'bg-transparent backdrop-blur-sm backdrop-saturate-150'; // blur

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
            <div className={`absolute inset-0 ${overlay}`} />
            <div
                role="dialog"
                aria-modal="true"
                className="relative w-full max-w-md rounded-lg p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}
            >
                {children}
            </div>
        </div>
    );
}
