import Link from "next/link"
import Image from "next/image"
import { title } from "process";



export default function SupplierCard(props: any) {

    const { companyName, companyImage, companyAddress, slug } = props.supplier;
    const linkPath = `/supplier/${slug}`
    const imgPath = `/images/supplier/${slug}/${companyImage}`

    return (
        <li className=' bg-secondary rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Link href={linkPath}>
                <div>
                    <Image src={imgPath} alt={companyName} width={300} height={200} layout='responsive' />
                </div>
                <div>
                    <h3>{companyName}</h3>
                    <p>{companyAddress}</p>
                </div>
            </Link>
        </li>
    )
}
