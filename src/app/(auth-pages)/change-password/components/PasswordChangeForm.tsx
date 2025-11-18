'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form"; 
import { ChangePasswordSchema } from "@/schema/changePassword";
import { Form } from "@/components/ui/form";
import { FormInput, Icons } from "@/components";
import { useState } from "react";
import { z } from "zod";

const PasswordChangeForm = () => {
    const [oldPassword, setOldPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);
    const [newConfirmPassword, setNewConfirmPassword] = useState(false);
    const form = useForm<z.infer<typeof ChangePasswordSchema>>({
        resolver: zodResolver(ChangePasswordSchema),
        defaultValues: {
            oldPassword: '',
            password: '',
            confirmPassword: '',
        },
    }); 
    function onSubmit(data: FieldValues) {
        if(data){
            alert(data.oldPassword);
        }
    }
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col items-start"
                >
                    <div className="w-full mb-4 !relative"
                        data-testid="change-password-form">
                        <FormInput
                            type={oldPassword ? 'text' : 'password'}
                            form={form}
                            labelClass='input-label !text-left'
                            className='input'
                            name='oldPassword'
                            label='Current Password'
                            placeholder='Enter your current password'
                        />
                        <button className="absolute right-2 top-10"
                            type="button"
                            onClick={() => setOldPassword(!oldPassword)}>
                            {!oldPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                        </button>
                    </div>
                    <div className="w-full mb-4 !relative">
                        <FormInput
                            type={newPassword ? 'text' : 'password'}
                            form={form}
                            labelClass='input-label !text-left'
                            className='input'
                            name='password'
                            label='New Password'
                            placeholder='Enter your new password'
                        />
                        <button className="absolute right-2 top-10"
                            type="button"
                            onClick={() => setNewPassword(!newPassword)}>
                            {!newPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                        </button>
                    </div>
                    <div className="w-full mb-4 !relative">
                        <FormInput
                            type={newConfirmPassword ? 'text' : 'password'}
                            form={form}
                            labelClass='input-label !text-left'
                            className='input'
                            name='confirmPassword'
                            label='Confirm Password'
                            placeholder='Confirm Password'
                        />
                        <button className="absolute right-2 top-10"
                            type="button"
                            onClick={() => setNewConfirmPassword(!newConfirmPassword)}>
                            {!newConfirmPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                        </button>
                    </div>
                    <div className="w-full mb-4 !relative"> 
                        <button type="submit" className="bg-purple-500 rounded-[8px] text-center
                    text-white mb-4 !w-full py-2.5 block">
                        Update
                        </button> 
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default PasswordChangeForm