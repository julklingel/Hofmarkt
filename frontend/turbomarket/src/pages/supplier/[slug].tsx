import { Fragment } from "react";
import Navbar from "../components/navbar";
import SupplierContent from "./supplier-detail/SupplierContent";






export default function Supplier() {
    return (
       <Fragment>
        <Navbar/>
        <SupplierContent/>
       </Fragment>
    )
}