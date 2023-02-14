import SupplierHeader from "./SupplierHeader";

const DUMMY_SUPPLIERS =
{
    id: 's1',
    name: 'Imkerei Ammersee GmbH',
    category: 'Bienenprodukte',
    image: 'imkerei.jpeg',
    slug: 'imkerei-ammersee-gmbh',
    location: 'Ammerseestraße 1, 82515 Wolfratshausen',
    date: '2021-01-01',
    products: [
        {
            id: 'p1',
            name: 'Wald-Honig',
            image: 'honig.jpg',
            price: 5.99,
            description: 'Honig aus der Region',
        },
        {
            id: 'p2',
            name: 'Bienenwachs',
            image: 'bienenwachs.jpg',
            price: 9.99,
            description: 'Bienenwachs aus der Region',
        },
    ]
}


export default function SupplierContent(props: any) {
    
    return (
        <article>
            <SupplierHeader name='' image='' />
            <h1>CONTENT</h1>
        </article>
    )
}