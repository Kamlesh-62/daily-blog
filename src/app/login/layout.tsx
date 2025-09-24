import Navbar from "@/components/layout/navbar";
const LoginLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default LoginLayout;