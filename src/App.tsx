import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./header/Header.tsx";
import CustomerList from "./customer_list/CustomerList.tsx";
import {ManageCustomer} from "./manage-customer/ManageCustomer.tsx";
import {MainContextProvider} from "./context/MainContext.tsx";

function App() {
    const headerProps={
        title:'State Management In Action',
        align:'text-center',
        fontSize:'fs-2'
    }



  return (
    <>
        <MainContextProvider>
            <Header{...headerProps}/>
            <ManageCustomer/>
            <CustomerList/>
        </MainContextProvider>





    </>
  )
}

export default App
