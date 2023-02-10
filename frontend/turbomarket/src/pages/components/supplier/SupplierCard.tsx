import Link from "next/link"
import Image from "next/image"



export default function SupplierCard(props: any) {
    const { name, image, location, date, slug } = props.supplier;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li>
            <Link href= '/supplier/${slug}'>
                <a >
                    <div>
                        <Image src={'/images/supplier/farmhouse.jpeg'} alt='Supplier Picture' width={50} height={50} />

                    </div>

                    <div>
                        <h3>Supplier Name</h3>
                        <p>Location</p>
                        <Image src={'/svg/meat.svg'} alt='Meat Sign' width={10} height={10} />
                        <time></time>

                    </div>
                </a>
            </Link>
        </li>
    )
}
