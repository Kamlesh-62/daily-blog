
import Image from "next/image"
import profilePic from '@/assets/navbar/logo.png';


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8">
            <div className="flex items-center gap-2">
                <Image src={profilePic} alt="logo" width={50} height={50} />
                <h1 className="text-2xl font-bold">First Fold</h1>
            </div>
            <div></div>
        </nav>
    )
}

export default Navbar