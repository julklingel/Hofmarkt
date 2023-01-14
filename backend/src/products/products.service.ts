import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    retrieveProducts(): Product {
        return {
            id: '1',
            categorie: 'Fruits',
            title: 'Apple',
            description: 'A red apple',
            image: 'https://images.unsplash.com/photo-1589989369979-8e1b0e1b2e1c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBjb2xvfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
            price: 1.99,
            
        }
    }
}

