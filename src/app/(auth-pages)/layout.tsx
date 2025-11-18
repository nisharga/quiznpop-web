import { AuthNav } from "./components";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="pt-4 lg:pt-16 pb-24"> 
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-3 lg:pr-8 lg:flex lg:flex-col
                    lg:items-center lg:justify-start lg:mt-20">
                        <AuthNav />
                    </div>
                    <div className="col-span-12 lg:col-span-9">{children}</div>
                </div>
            </div>
        </div>
    );
}
