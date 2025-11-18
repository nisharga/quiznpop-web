'use client'
import { 
    FormControl, 
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"; 
import { PhoneInput } from "@/components/ui/phone-input"; 
import { FormInput } from "@/components/ui";
import { Icons } from "@/components/Icons";
import React from 'react' 

interface IProps{
    // eslint-disable-next-line
    form: any;
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
}
const FormElements = ({ form, showPassword, setShowPassword }: IProps) => {
    return (
        <>
            <div className="!w-full mb-4">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => 
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="input-label">Phone Number</FormLabel>
                            <FormControl className="w-full input">
                                <PhoneInput placeholder="Enter a phone number"
                                    data-testid="phone-input"  
                                    {...field} 
                                    defaultCountry="GB" 
                                />
                            </FormControl> 
                            <FormMessage />
                        </FormItem>
                    }
                />
            </div>
            <div className="w-full mb-4 !relative">
                <FormInput
                    data-testid="password-input"
                    type={showPassword ? 'text' : 'password'}
                    form={form}
                    labelClass='input-label !text-left'
                    className='input'
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                />
                <button className="absolute right-2 top-10"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}>
                    {!showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                </button>
            </div>
        </>
    )
}

export default FormElements