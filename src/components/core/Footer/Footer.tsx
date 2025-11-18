import Link from "next/link";
import React from "react"; 
import { Subscribe } from ".";
import { FOOTER } from "@/static";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="container mb-6">
            <div className="h-full bg-purple-500 rounded-xl md:mx-auto text-white p-6 relative">
                <div className="absolute -top-6 left-0 w-full">
                    <Subscribe />
                </div>
                <div className="absolute top-0 right-28 bg-white/65 h-40 w-2 rounded-b-full 
                hidden md:block"></div>
                <div className="absolute top-28 right-0 bg-white/65 h-2 w-40 rounded-l-full 
                hidden md:block"></div>
                <div className="">
                    <div className="grid grid-cols-12 gap-4 w-full mt-16">
                        <div className="col-span-12 lg:col-span-4 space-y-4 mb-6 md:mb-0 mt-8">
                            <Link href="/" className="bg-red-500 h-10 w-20 z-50">
                                <Image src="/logo.png" width={140} height={40} alt="logo" />
                            </Link>
                            <p className="text-sm font-light text-white"> {FOOTER.title} </p>
                            <div className="flex flex-row gap-3 pt-2">
                                {FOOTER?.social?.map(({ id, icon, route }) => { 
                                    return (
                                        <Link 
                                            href={route}
                                            target="_blank"
                                            key={id}
                                            className="backdrop-blur-xl py-2 px-2.5 bg-white/25 
                                            rounded-md flex flex-row justify-center items-center">
                                            {icon}
                                        </Link>
                                    );
                                })} 
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 flex flex-row justify-between 
                        items-center w-full md:mb-0">
                            <div className="space-y-5">
                                <h3 className="border-b-[1.5px] border-white text-xl text-white">
                  Company
                                </h3>
                                <div className="flex flex-col gap-2" data-testid="company-links">
                                    {FOOTER?.company_pageLink?.map(({ id, label, route }) => { 
                                        return (
                                            <Link 
                                                href={route} 
                                                key={id}
                                                className="font-normal transition-colors 
                                                duration-300 text-white hover:text-gray-300">
                                                {label} 
                                            </Link>
                                        );
                                    })}  
                                </div>
                            </div>
                            <div className="space-y-5">
                                <div className="border-b-[1.5px] border-white text-xl font-normal 
                                text-right md:text-left">
                                    Useful Links
                                </div>
                                <div className="flex flex-col gap-2" data-testid="useful-links">
                                    {FOOTER?.usefulLink?.map(({ id, label, route }) => { 
                                        return (
                                            <Link 
                                                href={route} 
                                                key={id}
                                                className={`transition-colors duration-300 
                                                text-white font-normal hover:text-gray-300 
                                                text-right md:text-left`}>
                                                {label}
                                            </Link>
                                        );
                                    })} 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-end h-full mt-8 pb-3 
                lg:pb-0 lg:mt-10">
                    <h4 className="text-center border-t-[1.5px] border-white text-white 
                    text-xs mx-auto pt-2 flex-grow">
                        {FOOTER?.copyright}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
