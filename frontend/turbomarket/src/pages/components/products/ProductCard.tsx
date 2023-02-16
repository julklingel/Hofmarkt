
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard (props: any) {

    const { title, img, price, id } = props.product;
    const { slug, name } = props.product.supplier;
    const linkPath = `/offer/${slug}/${id}`
    const imgPath = `/images/supplier/${slug}/offers/${img}`

    return (
        <li className=' bg-secondary rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Link href={linkPath}>
                <div>
                    <Image src={imgPath} alt={img} width={300} height={200} layout='responsive' />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <p>{name}</p>
                </div>
            </Link>
        </li>
    )
    
}