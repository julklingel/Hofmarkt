"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<<< HEAD:backend/dist/src/products/products.controller.js
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getAllProducts() {
        return this.productService.getAllProducts();
    }
    getOneProduct(id) {
        return this.productService.getOneProduct(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getOneProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=products.controller.js.map
========
exports.WatchlistController = void 0;
const common_1 = require("@nestjs/common");
const watchlist_service_1 = require("./watchlist.service");
const guard_1 = require("../auth/guard");
const decorator_1 = require("../auth/decorator");
let WatchlistController = class WatchlistController {
    constructor(userService) {
        this.userService = userService;
    }
    getOwnWatchlist(user) {
    }
};
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WatchlistController.prototype, "getOwnWatchlist", null);
WatchlistController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Controller)('watchlist'),
    __metadata("design:paramtypes", [watchlist_service_1.WatchlistService])
], WatchlistController);
exports.WatchlistController = WatchlistController;
//# sourceMappingURL=watchlist.controller.js.map
>>>>>>>> 02e68d1 (b: replace product by offer):backend/dist/src/watchlist/watchlist.controller.js
