'use client'
import React from 'react' 
import { Avatar } from '@/components'
import { CONTACT_PAGE } from '@/static'
import { ContactForm } from './components'
import Link from 'next/link'
import { motion } from 'framer-motion'

const page = () => { 
    return (
        <div className='pb-20 pt-16'>
            <div className="container mb-12 lg:mb-24">
                <div className="flex flex-col xl:flex-row items-center justify-between mb-8 gap-4">
                    <h4
                        data-testid="contact-us-title">{CONTACT_PAGE.title}</h4>
                    <p className='lg:w-[400px] text-center xl:text-right'
                        data-testid="contact-us-content">
                        {CONTACT_PAGE.content}
                    </p>
                </div>
            </div>
            <div className="bg-purple-50 p-12 rounded-xl container mb-12"> 
                <div className="grid grid-cols-12 gap-6">
                    {CONTACT_PAGE.contact?.map(({ id, title, icon }) => 
                        <motion.div
                            className="col-span-12 lg:col-span-4 text-center flex flex-col 
                            items-center justify-center gap-8"
                            key={id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="w-[60px] h-[60px] lg:w-[78px] lg:h-[78px] bg-purple-500 
                            rounded-full flex items-center justify-center lg:-mt-24"
                            data-testid="contact-page-items-icon">
                                {icon}
                            </div>
                            <p
                                data-testid="contact-page-items-title">{title}</p>
                        </motion.div>)}
                </div>
            </div>
            <div className="container py-12"> 
                <div className="grid grid-cols-11 gap-6 h-full">
                    <div className="hidden lg:block col-span-12 lg:col-span-5 h-full 
                    rounded-xl relative">
                        <div className="relative">
                            <Avatar src={CONTACT_PAGE.thumb} className='w-full h-full'/>
                        </div>
                        <div className="absolute w-[255px] h-[68px] 
                        top-0 right-0 rounded-xl flex items-center justify-center bg-white">
                            <div className="flex flex-row gap-3 pt-2 p-2.5">
                                {CONTACT_PAGE?.social?.map(({ id, icon, route }) => { 
                                    return (
                                        <Link 
                                            href={route}
                                            target="_blank"
                                            key={id}
                                            className="w-[50px] h-[50px] backdrop-blur-xl py-2 
                                            px-2.5 bg-purple-100 rounded-full flex flex-row 
                                            justify-center items-center">
                                            {icon}
                                        </Link>
                                    );
                                })} 
                            </div>
                        </div> 
                    </div> 
                    <div className="col-span-12 lg:col-span-6 h-full 
                 rounded-xl lg:px-16">
                        <ContactForm />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default page