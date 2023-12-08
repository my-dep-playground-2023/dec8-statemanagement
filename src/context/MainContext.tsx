// MainContext.tsx

import React, {createContext, ReactNode, useContext, useState} from 'react';
import {TCustomer} from "../customer_list/CustomerList.tsx";

const dummyCustomerRecords = [
    { id: 'C001', name: 'Kasun', contact: '077-123467'},
    { id: 'C002', name: 'Nuwan', contact: '078-123467'},
    { id: 'C003', name: 'Upul', contact: '075-123467'},
    { id: 'C004', name: 'Sampath', contact: '070-123467'},
    { id: 'C005', name: 'Kalum', contact: '071-123467'}
];

// Create a context to hold customer data
const MainContext = createContext<TCustomer[]>([]);

// Create a context provider component
export function MainContextProvider ({children}: {children: ReactNode}) {
    // Initialize the customer data with dummy values
    const [customers] = useState(dummyCustomerRecords);

    // Provide the context values
    return (

        <MainContext.Provider value={customers}>
            {children}
        </MainContext.Provider>
    );
};

// Create a custom hook to use the context
export function useCustomerList (){
    // const context = useContext(MainContext);
    // if (!context) {
    //     throw new Error('useMainContext must be used within a MainContextProvider');
    // }
    return useContext(MainContext);
};
