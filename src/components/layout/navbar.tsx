import { JSX } from "react";
import Image from "next/image";
import profilePic from "@/assets/navbar/logo.png";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 px-20 py-4 shadow align-center  ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={profilePic} alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">First Fold</h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-8 font-semibold list-none m-0">
            <li>Check me</li>
            <li>Write</li>
            <li><Link href="/login" className="text-black no-underline">Sign in </Link></li>
            <li className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">Sign up</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
