import Image from "next/image"


export default function SupplierHeader(props: any) {
    const { name, image, category, location } = props.supplier
    return (
        <header>
            <h1>{name}</h1>
            <Image src={`/images/${image}`} alt={name} width={200} height={150} />

        </header>
    )
}