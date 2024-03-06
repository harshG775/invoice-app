"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Inventory() {
    const searchParams = useSearchParams();
    const inventoryType = searchParams.get("type")
    return (
        <div>
            <h1>inventory:{inventoryType}</h1>
            <Link href={`/parties/create?type=${inventoryType}`}>
                Create inventory
            </Link>
        </div>
    );
}