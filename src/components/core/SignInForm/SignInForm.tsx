'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { SignInSchema } from "@/schema";
import { useState } from "react";
import { FormElements, RememberForgot } from ".";
import { z } from "zod";

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);

    const form =  useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            phone: "",
            password: "",
        },
    });
    
    function onSubmit(data: FieldValues) {
        alert(data.password); 
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col items-start"
            >
                <FormElements form={form} 
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                <RememberForgot
                    remember={remember}
                    setRemember={setRemember}
                    forgotPassword={forgotPassword}
                    setForgotPassword={setForgotPassword}
                />
                <button type="submit" className="bg-purple-500 rounded-[8px] text-center
                text-white mb-4 w-full py-2.5"
                data-testid="sign-in">
                    Sign In
                </button> 
            </form>
        </Form>
    )
}

export default SignInForm