"use client";
import React from "react";
import { useForm,type FieldValues } from "react-hook-form";
export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting,errors},
        reset,
        getValues,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            conformPassword: "",
        },
    });
    const onHandleSubmit=async(formData:FieldValues)=>{
        
        await new Promise((r)=>setTimeout(r,1000))
        console.log(formData)
        reset()
    }
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
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Invalid Email",
                            },
                        })}
                        placeholder="Enter Email"
                        className={`${
                            errors.email?.message
                                ? "outline-red-500"
                                : "outline-blue-500"
                        } outline`}
                    />
                    <span className="text-red-800 text-xs">
                        {errors.email?.message}
                    </span>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        {...register("password", {
                            required:{
                                value:true,
                                message:"password is required"
                            },
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be at least 6 characters",
                            },
                        })}
                        placeholder="Enter password"
                        className={`${
                            errors.password?.message
                                ? "outline-red-500"
                                : "outline-blue-500"
                        } outline`}
                    />
                    <span className="text-red-800 text-xs">
                        {errors.password?.message}
                    </span>
                </li>
                <li>
                    <label htmlFor="conformPassword">Conform Password</label>
                    <input
                        type="text"
                        id="conformPassword"
                        {...register("conformPassword", {
                            required:{
                                value:true,
                                message:"password is required"
                            },
                            minLength: {
                                value: 6,
                                message:
                                    "Conform Password must be at least 6 characters",
                            },
                            validate: (value) =>
                                value === getValues("password") || "Password does not match",
                        })}
                        placeholder="Re-Enter password"
                        className={`${
                            errors.conformPassword?.message
                                ? "outline-red-500"
                                : "outline-blue-500"
                        } outline`}
                    />
                    <span className="text-red-800 text-xs">
                        {errors.conformPassword?.message}
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
