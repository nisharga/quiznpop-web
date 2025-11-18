"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MENUS } from "@/static";
import { SingleLink, UnderLineOnHover } from "./Header";
import { SignInModal } from ".";

interface IProps {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResponsiveHeader = ({ openNav, setOpenNav }: IProps) => {
    const pathName = usePathname();

    return (
        <div className="py-4">
            {!openNav && 
        <div
            className={`mx-2 h-16 rounded-lg p-4 fixed top-3 left-5 right-5 z-50 
                    transition-transform duration-300 ease-in-out bg-purple-50`}
        >
            <div className="flex flex-row justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" width={100} height={40} alt="logo" />
                </Link>
                <div className="flex gap-4 items-center">
                    <SignInModal />
                    <IoMenu
                        onClick={() => setOpenNav(true)}
                        className="h-6 w-6 cursor-pointer"
                    />
                </div>
            </div>
        </div>
            }

            <div
                className={`fixed top-3 left-0 w-full h-screen bg-white text-first-100 z-[9999]
                transition-all duration-500 ease-in-out 
                ${
        openNav
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-[-100%] pointer-events-none"
        }
            `}
            >
                <div className="bg-purple-50 h-16 flex flex-row justify-between items-center 
                mx-2 rounded-lg px-2">
                    <Link href="/">
                        <Image src="/logo.svg" width={100} height={40} alt="logo" />
                    </Link>
                    <IoClose
                        onClick={() => setOpenNav(false)}
                        className="h-8 w-8 cursor-pointer"
                    />
                </div>
                <nav className="flex flex-col items-center gap-8 text-xl font-medium mt-10">
                    {MENUS?.map(({ id, label, route }) => {
                        const isActive = `/${route}` === pathName;
                        return (
                            <div key={id} className="relative group">
                                <SingleLink route={route} isActive={isActive} label={label} />
                                <UnderLineOnHover isActive={isActive} />
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default ResponsiveHeader;
