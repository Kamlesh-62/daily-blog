'user client';
import Cookies from "js-cookie";
import React, {useEffect, ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from "../../libs/store/hooks";
import { setIsAuthenticated } from "../../libs/store/auth/authSlice";

export function AuthProvider({ children }: { children: ReactNode }) {
    const dispatch = useAppDispatch();

    const token = Cookies.get("sb-logged-in");
    const isAuthenticated = token === "1";
    useEffect(() => {
        dispatch(setIsAuthenticated(isAuthenticated));
    }, [isAuthenticated]);

    return(
        <>{children}</>        
    )
}
