"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ResponsiveHeader, SignInModal } from ".";
import { MENUS } from "@/static";
import { motion } from "motion/react";
import { itemVariants, navVariants } from "@/utils";
 
export const UnderLineOnHover = ({ isActive }: { isActive: boolean }) => {
    return (
        <span
            className={`absolute left-0 -bottom-1 w-full h-[4px] rounded-full bg-purple-500 
                    transition-transform duration-500 ease-in-out transform origin-left
                ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
        ></span>
    );
};

interface IProps {
  route: string;
  label: string;
  isActive: boolean;
}
export const SingleLink = ({ route, isActive, label }: IProps) => {
    return (
        <Link
            href={`/${route}`}
            className={`font-medium transition-colors duration-300 
        ${isActive ? "text-black" : "text-gray-500 hover:text-black"}`}
        >
            {label}
        </Link>
    );
};

const Header = () => {
    const pathName = usePathname();
    const [openNav, setOpenNav] = useState(false);
 
    React.useEffect(() => {
        document.body.style.overflow = openNav ? "hidden" : "auto";
    }, [openNav]); 
    
    return (
        <>
            <header className="sticky top-0 py-4 z-50">
                <div className="container">
                    <div className="backdrop-blur-sm hidden md:block w-full h-16 mx-auto py-1.5 
                    px-4 top-3 bottom-0 right-0 left-0 z-50 bg-purple-50 rounded-lg">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <Link href="/">
                                <Image src="/logo.svg" 
                                    width={140} height={40} alt="logo"
                                    data-testid="logo" />
                            </Link>
                            <motion.div 
                                initial="hidden"
                                animate="visible"
                                variants={navVariants} 
                                className="flex gap-6"
                                data-testid="nav-links"
                            >
                                {MENUS?.map(({ id, label, route }) => {
                                    const isActive = `/${route}` === pathName;
                                    return (
                                        <motion.div 
                                            key={id} 
                                            className="relative group" 
                                            variants={itemVariants} 
                                        >
                                            <SingleLink route={route} isActive={isActive} 
                                                label={label} />
                                            <UnderLineOnHover isActive={isActive} />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                            <SignInModal />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container block md:hidden"> 
                <ResponsiveHeader openNav={openNav} setOpenNav={setOpenNav} />  
            </div>
        </>
    );
};

export default Header;