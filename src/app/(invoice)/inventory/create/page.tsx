"use client"
import { useSearchParams } from "next/navigation";
export default function CreateParties() {
    const searchParams = useSearchParams();
    const inventoryType = searchParams.get("type")
    return (
        <div>
            <h1>inventory:{inventoryType}</h1>
        </div>
    );
}