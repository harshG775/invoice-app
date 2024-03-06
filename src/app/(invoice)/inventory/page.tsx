"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Parties() {
    const searchParams = useSearchParams();
    const inventoryType = searchParams.get("type")
    return (
        <div>
            <h1>Items:{inventoryType}</h1>
            <Link href={`/parties/create?type=${inventoryType}`}>
                Create Items
            </Link>
        </div>
    );
}