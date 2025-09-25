import { JSX } from "react";
import Image from "next/image";
import profilePic from "@/assets/navbar/logo.png";

const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white z-50">
      <div className="flex justify-between items-center h-full px-20">
        <div className="flex items-center gap-2">
          <Image src={profilePic} alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">First Fold</h1>
        </div>
        <div>{/* nav links or buttons go here */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
