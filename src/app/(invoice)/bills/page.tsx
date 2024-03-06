"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Bills() {
    const searchParams = useSearchParams();
    const billsType = searchParams.get("type")
    return (
        <div>
            <h1>bills:{billsType}</h1>
            <Link href={`/parties/create?type=${billsType}`}>
                Create bills
            </Link>
        </div>
    );
}