// app/components/Navbar.tsx
'use client';

import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import profilePic from '@/assets/navbar/logo.png';
import { useAppDispatch, useAppSelector } from '@/libs/store/hooks';
import { setIsAuthenticated } from '@/libs/store/auth/authSlice';
import { BrowserClient } from '@/libs/supabase/client';

const Navbar = (): JSX.Element => {
  const { isAuthenticated } = useAppSelector(s => s.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLogout = async () => {
    const supabase = BrowserClient();
    await supabase.auth.signOut();
    dispatch(setIsAuthenticated(false));
    router.refresh();
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 px-20 py-4 shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.push('/')}>
          <Image src={profilePic} alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">First Fold</h1>
        </div>
        <div className="flex items-center gap-8 font-semibold">
          {!isAuthenticated ? (
            <>
              <Link href="/login" className="text-black no-underline">Sign in</Link>
              <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-full no-underline">Sign up</Link>
            </>
          ) : (
            <>
              <Link href="/post" className="text-black no-underline">Post</Link>
              <button onClick={onLogout} className="cursor-pointer bg-black text-white px-4 py-2 rounded-full border border-black">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
