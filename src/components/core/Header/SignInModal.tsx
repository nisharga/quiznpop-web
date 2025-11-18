'use client'
import React, { useState } from 'react'
import {
    AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Icons } from '@/components/Icons'
import { ModalHeader } from '@/components/shared'
import { SignInForm } from '../SignInForm'
import Link from 'next/link'
import { motion } from "motion/react"; 

const SignInModal = () => {
    const [open, setOpen] = useState(false)
    const isLoginIn = false;
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            {!isLoginIn ?
                <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogTrigger asChild>
                        <Button className='bg-purple-500 hover:bg-purple-400 
                        text-white py-1.5 px-4 rounded-lg'
                        data-testid="signin-button"> Sign In </Button> 
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className='relative mb-6'>
                                <div className="">
                                    <ModalHeader 
                                        title="Sign In!" 
                                        content="Welcome Back ! Please enter your details" />
                                </div>
               
                                <button onClick={() => setOpen(false)}
                                    data-testid="close-button" 
                                    className='absolute right-0.5 top-0.5'>
                                    <Icons.X className='stroke-[#FF4040]'/>
                                </button>
                            </AlertDialogTitle> 
                            <div className="">
                                <SignInForm />
                            </div>
                        </AlertDialogHeader> 
                    </AlertDialogContent>
                </AlertDialog>
                :  <div 
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} 
                >
                    <div className="flex gap-4 items-center p-2 rounded-md cursor-pointer">
                        <div className='hidden xs:block'>
                            <p className="font-medium text-sm">User Name</p>
                            <p className="text-xs">user</p>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-slate-600"></div>
          
                        {/* Rotating Chevron Icon */}
                        <motion.div
                            animate={{ rotate: isHovered ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Icons.ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </div>
           
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`absolute left-0 bg-purple-50 w-full overflow-hidden z-50
                    rounded-b-xl ${
        isHovered ? "block" : "hidden"
        }`}
                    >
                        <Link
                            href="/profile-details"
                            className="p-4 w-full text-sm text-gray-700 hover:bg-red-100
                    flex items-center gap-1.5 font-medium rounded-xl"
                        >
                            <Icons.UserRound className='w-5 h-5'/> Profile Details
                        </Link>
                        <button
                            onClick={() => alert("I am logout")}
                            className="w-full text-left p-4 text-sm text-gray-700 
                    hover:bg-red-100 flex items-center gap-1.5 font-medium rounded-xl"
                        >
                            <Icons.Power className='w-5 h-5'/> Logout
                        </button>
                    </motion.div>
                </div>
            }
        </>
    )
}
export default SignInModal