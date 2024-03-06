"use client"
import { useSearchParams } from "next/navigation";
export default function CreateParties() {
    const searchParams = useSearchParams();
    const billsType = searchParams.get("type")
    return (
        <div>
            <h1>bills:{billsType}</h1>
        </div>
    );
}