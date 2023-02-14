import SupplierGrid from "../components/supplier/SupplierGrid";




export default function FeaturedSuppliers(props: any) {
    return (
        <section className=" px-10 text-center text-c.green ">
            <h2 className=" text-2xl pt-4 p-4">Featured Suppliers</h2>
            <SupplierGrid suppliers={props.suppliers}/>

        </section>
    ) 
}
