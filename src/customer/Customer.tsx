import './Customer.css'
import {useState} from "react";
import {useCustomerList} from "../context/MainContext.tsx";

// /*const dummydata = [
//     { id: 'C001', name: 'JGUYANA', contact: '0YUFUYF34567' },
//     { id: 'C002', name: 'IFHYUAlANA', contact: '071123456KJHIK7' },
//     { id: 'C003', name: 'KAFDIGlANA', contact: '071KHFUYHJ1234567' },
//     { id: 'C004', name: 'JDAlANA', contact: '07112345LJHGI67' },
//     { id: 'C005', name: 'bAlANA', contact: '07112GFDYTF7' },
// ];*/


export function Customer(){
    const customerList=useCustomerList();

    return(
        <>



            <tbody>
            {customerList.map((customer) => (<tr key={customer.id}>
                                                                         <td>{customer.id}</td>
                                                                        <td>{customer.name}</td>
                                                                        <td>{customer.contact}</td>
                                                                                                </tr>
                                                                                                        ))}
            </tbody>


        </>

    )
}