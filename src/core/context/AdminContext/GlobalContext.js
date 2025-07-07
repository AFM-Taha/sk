import React, {  createContext, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContextData = () => {
    const context = useContext(GlobalContext);
    // console.log('context----', context)
    if (context === undefined) {
        throw new Error(`Context missing provider`);
    }
    return context;
};

export default function GlobalProvider({ children }) {

    return (
        <GlobalContext.Provider value={{
          
        }}>{children}</GlobalContext.Provider>
    )
}