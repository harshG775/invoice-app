"use client";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
const partyFormSchema = z.object({
    partyType: z.string(),
    partyName: z.string(),
    contactPerson: z.string(),
    emailAddress: z.string(),
    phoneNumber: z.string(),
    address: z.string(),
    city: z.string(),
    stateProvince: z.string(),
    country: z.string(),
    postalCode: z.string(),
    notes: z.string(),
})
type FormData = z.infer<typeof partyFormSchema>
export default function CreateParty() {
    const searchParams = useSearchParams();
    const partyType = searchParams.get("type");
    const { register, handleSubmit } = useForm({
        defaultValues: {
            partyType: partyType,
            partyName: "",
            contactPerson: "",
            emailAddress: "",
            phoneNumber: "",
            address: "",
            city: "",
            stateProvince: "",
            country: "",
            postalCode: "",
            notes: "",
        },
    });
    const handleFormSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Party:{partyType}</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label>Party Type:</label>
                    <input type="text" {...register("partyType")} />
                </div>
                <div>
                    <label>Party Name:</label>
                    <input type="text" {...register("partyName")} />
                </div>
                <div>
                    <label>Contact Person:</label>
                    <input type="text" {...register("contactPerson")} />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" {...register("emailAddress")} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" {...register("phoneNumber")} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" {...register("address")} />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" {...register("city")} />
                </div>
                <div>
                    <label>State/Province:</label>
                    <input type="text" {...register("stateProvince")} />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" {...register("country")} />
                </div>
                <div>
                    <label>Postal Code/ZIP Code:</label>
                    <input type="text" {...register("postalCode")} />
                </div>
                <div>
                    <label>Notes:</label>
                    <textarea {...register("notes")} />
                </div>
                <button type="submit">Add Party</button>
            </form>
        </div>
    );
}
