import './Header.css'
import CustomerList from "../customer_list/CustomerList.tsx";

type HeaderProps={
    title:string,
    align:string,
    fontSize:string,
}
export function Header({title,align,fontSize}:HeaderProps){
    return(
        <>
            <header className="p-2 border-bottom">
                <h1 className={`${align} ${fontSize} m-0`}>{title}</h1>
            </header>




        </>
    )

}