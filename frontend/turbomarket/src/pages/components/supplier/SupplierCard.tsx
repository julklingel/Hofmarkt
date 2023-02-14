import Link from "next/link"
import Image from "next/image"
import { title } from "process";



export default function SupplierCard(props: any) {
    
    const { name, image, category, location, date, slug } = props.supplier;
    const linkPath = `/supplier/${slug}`
    const imgPath = `/images/supplier/${slug}/${image}`
    console.log()
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li className=' bg-secondary rounded-3xl'>
            <Link href={linkPath}>
            
                
                <div>
                    <Image src={imgPath} alt={name} width={300} height={200} layout='responsive' />
                </div>

                <div>
                    <h3>{name}</h3>
                    <p>{location}</p>
                    <p>{category}</p>
                </div>
                

            </Link>
        </li>
    )
}
