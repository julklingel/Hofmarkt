
import SupplierGrid from "../components/supplier/SupplierGrid";




export default function AllSupplier(props: any) {
    return (
        
        <section className=" px-10 text-center text-c.green ">
        <SupplierGrid suppliers={props.suppliers}/>
        </section>
        
    );
    }
