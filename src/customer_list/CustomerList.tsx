import './CustomerList.css'
import {Customer} from "../customer/Customer.tsx";

 export default function CustomerList(){
    return (
        <>
            <h3>mihiranga</h3>
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CONTACT</th>
                    <th>DELETE</th>
                </tr>
                </thead>

                <Customer/>


            </table>

        </>


    )
 }