"use client";
import storeAction from "@/store/storeAction";
import { useStore } from "@/store/StoreProvider";
export default function Home() {
    const [state, dispatch] = useStore();
    const handleClick = () => {
        dispatch({
            type: storeAction.INCREMENT,
            payload: state.count + 1,
        });
    };
    return (
        <div className="flex justify-center flex-col items-center">
            <button onClick={handleClick}>change {state.count}</button>
        </div>
    );
}
