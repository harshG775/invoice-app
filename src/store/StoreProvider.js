"use client";
// StoreProvider.js
import { useReducer } from "react";
import storeReducer from "./storeReducer";
export default function StoreProvider({ children }) {
    const initialState = {
        count: 0,
    };
    return (
        <storeContext.Provider value={useReducer(storeReducer, initialState)}>
            {children}
        </storeContext.Provider>
    );
}

// useStore.js
import { createContext, useContext } from "react";
const storeContext = createContext();
export function useStore() {
    return useContext(storeContext);
}
