// "use client"
// import { useSearchParams } from "next/navigation";
import Form from "./components/Form";
export default function CreateItem() {
    // const searchParams = useSearchParams();
    // const inventoryType = searchParams.get("type")
    return (
        <div>
            {/* <h1 className="mb-8">inventory:{inventoryType}</h1> */}
            <Form/>
        </div>
    );
}