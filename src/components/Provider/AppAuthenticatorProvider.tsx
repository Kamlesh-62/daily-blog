// app/providers/AuthProvider.client.tsx
'use client';

import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/libs/store/hooks';
import { setIsAuthenticated } from '@/libs/store/auth/authSlice';
import { BrowserClient } from '@/libs/supabase/client';

export function AuthProvider({ children }: { children: ReactNode }) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        const supabase = BrowserClient();

        supabase.auth.getSession().then(({ data: { session } }) => {
            dispatch(setIsAuthenticated(!!session));
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(setIsAuthenticated(!!session));
            router.refresh(); 
        });

        // 3) Cleanup
        return () => {
            subscription.unsubscribe();
        };
    }, [dispatch, router]);

    return <>{children}</>;
}
