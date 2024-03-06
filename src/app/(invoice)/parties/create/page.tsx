"use client"
import { useSearchParams } from "next/navigation";
export default function CreateParty() {
    const searchParams = useSearchParams();
    const partyType = searchParams.get("type")
    return (
        <div>
            <h1>Party:{partyType}</h1>
        </div>
    );
}