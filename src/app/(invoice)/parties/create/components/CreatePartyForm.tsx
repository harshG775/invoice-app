"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { partyFormSchema, TypePartyForm } from "@/lib/types/party";
import { zodResolver } from "@hookform/resolvers/zod";
export default function CreatePartyForm() {
    const searchParams = useSearchParams();
    const partyType = searchParams.get("type");
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
        setError,
    } = useForm<TypePartyForm>({
        resolver: zodResolver(partyFormSchema),
        defaultValues: {
            partyType: partyType || "",
        },
    });
    const handleFormSubmit: SubmitHandler<TypePartyForm> = (data) => {
        console.log(data);
        reset();
    };
    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="min-h-screen grid place-content-center gap-4"
        >
            <ul className="bg-neutral-800 p-2 flex flex-col gap-2
            
                [&>li]:grid [&>li]:grid-cols-2
                [&>li>input]:min-h-5 [&>li>input]:p-2 text-sm
            ">
                <li>
                    <label>Party Type:</label>
                    <input type="text" {...register("partyType")} />
                    <span className="text-red-800 text-xs">
                        {`${errors.partyType ? errors.partyType.message : ""}`}
                    </span>
                </li>
                <li>
                    <label>Party Name:</label>
                    <input type="text" {...register("partyName")} />
                    <span className="text-red-800 text-xs">
                        {`${errors.partyName ? errors.partyName.message : ""}`}
                    </span>
                </li>
                <li>
                    <label>Contact Person:</label>
                    <input type="text" {...register("contactPerson")} />
                    <span className="text-red-800 text-xs">
                        {`${
                            errors.contactPerson
                                ? errors.contactPerson.message
                                : ""
                        }`}
                    </span>
                </li>
                <li>
                    <label>Email Address:</label>
                    <input type="email" {...register("emailAddress")} />
                    <span className="text-red-800 text-xs">
                        {`${
                            errors.emailAddress
                                ? errors.emailAddress.message
                                : ""
                        }`}
                    </span>
                </li>
                <li>
                    <label>Phone Number:</label>
                    <input type="tel" {...register("phoneNumber")} />
                    <span className="text-red-800 text-xs">
                        {`${
                            errors.phoneNumber ? errors.phoneNumber.message : ""
                        }`}
                    </span>
                </li>
                <li>
                    <label>Address:</label>
                    <input type="text" {...register("address")} />
                    <span className="text-red-800 text-xs">
                        {`${errors.address ? errors.address.message : ""}`}
                    </span>
                </li>
                <li>
                    <label>City:</label>
                    <input type="text" {...register("city")} />
                    <span className="text-red-800 text-xs">
                        {`${errors.city ? errors.city.message : ""}`}
                    </span>
                </li>
                <li>
                    <label>State/Province:</label>
                    <input type="text" {...register("stateProvince")} />
                    <span className="text-red-800 text-xs">
                        {`${
                            errors.stateProvince
                                ? errors.stateProvince.message
                                : ""
                        }`}
                    </span>
                </li>
                <li>
                    <label>Country:</label>
                    <input type="text" {...register("country")} />
                    <span className="text-red-800 text-xs">
                        {`${errors.country ? errors.country.message : ""}`}
                    </span>
                </li>
                <li>
                    <label>Postal Code/ZIP Code:</label>
                    <input type="text" {...register("postalCode")} />
                    <span className="text-red-800 text-xs">
                        {`${
                            errors.postalCode ? errors.postalCode.message : ""
                        }`}
                    </span>
                </li>
                <li>
                    <label>Notes:</label>
                    <textarea {...register("notes")} />
                    <span className="text-red-800 text-xs">
                        {`${errors.notes ? errors.notes.message : ""}`}
                    </span>
                </li>
            </ul>

            <button
                disabled={isSubmitting}
                className="bg-blue-900 text-neutral-50 p-2 rounded-lg"
            >
                Add Party
            </button>
        </form>
    );
}
