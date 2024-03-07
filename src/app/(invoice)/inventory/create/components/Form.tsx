"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// in separate folder
import { z } from "zod";
const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(10,"password must be at least 10 characters"),
    conformPassword: z.string().min(10,"password must be at least 10 characters"),
}).refine(data => data.password === data.conformPassword, {
    message: "passwords do not match",
    path: ["conformPassword"],
});
type TypeSignUpSchema = z.infer<typeof signUpSchema>;
// in separate folder


export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
        setError
    } = useForm<TypeSignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });
    const onHandleSubmit = async (formData:TypeSignUpSchema) => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const respData = await response.json();
        
        if(respData.errors) {
            const errors = respData.errors;
            if(errors.email) {
                setError("email",{
                    type:"server",
                    message:errors.email
                });
            }
            if(errors.password) {
                setError("password",{
                    type:"server",
                    message:errors.password
                });
            }
            if(errors.conformPassword) {
                setError("conformPassword",{
                    type:"server",
                    message:errors.conformPassword
                });
            }
            return
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onHandleSubmit)}
            className="grid place-content-center bg-white text-neutral-900 min-h-screen"
        >
            <ul className="grid gap-2 [&>li]:grid [&>li]:grid-cols-2 [&>li]:gap-2 [&_input]:text-neutral-50">
                <li>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Enter Email"
                        className={`${
                            errors.email?.message
                                ? "outline-red-500"
                                : "outline-blue-500"
                        } outline`}
                    />
                    <span className="text-red-800 text-xs">
                        {`${errors.email?errors.email.message:""}`}
                    </span>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        {...register("password")}
                        placeholder="Enter password"
                        className={`${
                            errors.password?.message
                                ? "outline-red-500"
                                : "outline-blue-500"
                        } outline`}
                    />
                    <span className="text-red-800 text-xs">
                        {`${errors.password?errors.password.message:""}`}
                    </span>
                </li>
                <li>
                    <label htmlFor="conformPassword">Conform Password</label>
                    <input
                        type="text"
                        id="conformPassword"
                        {...register("conformPassword")}
                        placeholder="Re-Enter password"
                        className={`${
                            errors.conformPassword?.message
                                ? "outline-red-500"
                                : "outline-blue-500"
                        } outline`}
                    />
                    <span className="text-red-800 text-xs">
                        {`${errors.conformPassword?errors.conformPassword.message:""}`}
                    </span>
                </li>
            </ul>
            <div className="flex justify-end">
                <button
                    disabled={isSubmitting}
                    className={`${
                        isSubmitting ? "bg-blue-500/50 cursor-not-allowed" : ""
                    } bg-blue-500 text-neutral-50 font-semibold py-2 px-4 rounded-md
                    `}
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
