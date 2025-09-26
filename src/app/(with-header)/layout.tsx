"use client";
import Navbar from "@/components/layout/navbar";

export default function RootLayoutWithHeader({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <main className="pt-25">{children}</main>
        </>
    )
}