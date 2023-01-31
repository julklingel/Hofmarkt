"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    retrieveProducts() {
        return {
            id: '1',
            categorie: 'Fruits',
            title: 'Apple',
            description: 'A red apple',
            image: 'https://images.unsplash.com/photo-1589989369979-8e1b0e1b2e1c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBjb2xvfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
            price: 1.99,
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map