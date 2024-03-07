import { z } from "zod";
export const partyFormSchema = z.object({
    partyType: z.string(),
    partyName: z.string(),
    contactPerson: z.string(),
    emailAddress: z.string().email(),
    phoneNumber: z.string(),
    address: z.string(),
    city: z.string(),
    stateProvince: z.string(),
    country: z.string(),
    postalCode: z.string(),
    notes: z.string(),
});
export type TypePartyForm = z.infer<typeof partyFormSchema>;
