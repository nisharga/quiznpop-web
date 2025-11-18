'use client';
import React, { useState } from 'react';  
import { contactUsSchema } from '@/schema'; 
import { zodResolver } from "@hookform/resolvers/zod" 
import { FieldValues, useForm } from "react-hook-form" 
import { ConfirmationText, FormElements } from '.';
import { z } from 'zod';

const ContactForm = () => { 
    const isLoading = false;
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form =  useForm<z.infer<typeof contactUsSchema>>({
        resolver: zodResolver(contactUsSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });
    async function onSubmit(values: FieldValues) {
        if(values){
            setIsSubmitted(true)
        } 
    }
    return (
        <div className=''>
            {isSubmitted ? 
                <ConfirmationText setIsSubmitted={setIsSubmitted} />
                : 
                <FormElements form={form} onSubmit={onSubmit} isLoading={isLoading}/>
            }
        </div>
    );
};

export default ContactForm;