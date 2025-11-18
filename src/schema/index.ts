import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const contactUsSchema = z.object({
    name: z.string().min(4, {
        message: "Name must be at least 4 characters.",
    }),
    email: z.string({
        message: "Provide a valid email address",
    }).email(), 
    subject: z.string().min(10, {
        message: "Subject must be at least 10 characters.",
    }),
    message: z.string().min(20, {
        message: "Message must be at least 20 characters.",
    }),
})
 
export const SignInSchema = z.object({
    phone: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    password: z.string()
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(new RegExp(".*\\d.*"), "One number")
        .regex(
            new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
            "One special character"
        )
        .min(6, "Must be at least 6 characters in length"), 
});

 
export const profileDetailsSchema = z.object({
    name: z.string().min(4, {
        message: "Name must be at least 4 characters.",
    }),
    userId: z.string({
        message: "userId must be at least 4 characters.",
    }), 
    email: z.string({
        message: "Provide a valid email address",
    }).email(), 
    phone: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    gender: z.string({
        message: "gender must be provided",
    }), 
    dateOfBirth: z
        .string({
            message: "dateOfBirth must be provided",
        })
        .regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "Invalid date format. Use YYYY-MM-DD.",
        }), 
})

export const bankPaymentSchema = z.object({ 
    country: z.string({
        message: "country must be selected",
    }),
    bank: z.string({
        message: "bank must be selected",
    }) 
})
export const redeemRewardSchema = z.object({ 
    amount: z.string().min(1, {
        message: "Amount must be at least 1 characters.",
    }),
    country: z.string({
        message: "country must be selected",
    }),
    bank: z.string({
        message: "bank must be selected",
    }),
    holderName: z.string().min(4, {
        message: "Account Holder Name must be at least 4 characters.",
    }), 
    accountNo: z.string().min(8, {
        message: "Account No must be 8 digit",
    }),
})
