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
exports.OfferController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const offers_service_1 = require("./offers.service");
let OfferController = class OfferController {
    constructor(offerService) {
        this.offerService = offerService;
    }
<<<<<<< HEAD
    getAllOffers() {
        return this.productsService.getAllOffers();
    }
    getOffer(id) {
        return this.productsService.getOneOffer(id);
=======
    getOffers() {
        console.log('getOffers');
        return this.offerService.getOffers();
    }
    getOffer(id) {
        return this.offerService.getOffer(id);
>>>>>>> 02e68d1 (b: replace product by offer)
    }
    createOffer(dto) {
        return this.offerService.createOffer(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
<<<<<<< HEAD
], OfferController.prototype, "getAllOffers", null);
=======
], OfferController.prototype, "getOffers", null);
>>>>>>> 02e68d1 (b: replace product by offer)
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OfferController.prototype, "getOffer", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.offerDto]),
    __metadata("design:returntype", void 0)
], OfferController.prototype, "createOffer", null);
OfferController = __decorate([
    (0, common_1.Controller)('offer'),
    __metadata("design:paramtypes", [offers_service_1.OfferService])
], OfferController);
exports.OfferController = OfferController;
//# sourceMappingURL=offers.controller.js.map