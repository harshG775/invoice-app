"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Parties() {
    const searchParams = useSearchParams();
    const partyType = searchParams.get("type")
    return (
        <div>
            <h1>Party:{partyType}</h1>
            <Link href={`/parties/create?type=${partyType}`}>
                Create Party
            </Link>
        </div>
    );
}