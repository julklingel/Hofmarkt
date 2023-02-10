import SupplierCard from "./SupplierCard";




export default function SupplierGrid(props:any) {
    const { supplier } = props;
    return (
        <div className="grid grid-cols-5 col-auto content-center gap-6 ">
            <ul>
                {supplier.map((supplier:any) => (<SupplierCard key={supplier.slug} supplier={supplier}/>))}           
            </ul>
            
        </div>
    )
}
