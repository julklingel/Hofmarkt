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
exports.SupplierController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const supplier_service_1 = require("./supplier.service");
let SupplierController = class SupplierController {
    constructor(supplierService) {
        this.supplierService = supplierService;
    }
    getSuppliers() {
        return this.supplierService.getSuppliers();
    }
    getFeaturedSuppliers() {
        return this.supplierService.getFeaturedSuppliers();
    }
    getSupplier(id) {
        return this.supplierService.getSupplier(id);
    }
    createSupplier(dto) {
        return this.supplierService.createSupplier(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "getSuppliers", null);
__decorate([
    (0, common_1.Get)('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "getFeaturedSuppliers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "getSupplier", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.supplierDto]),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "createSupplier", null);
SupplierController = __decorate([
    (0, common_1.Controller)('supplier'),
    __metadata("design:paramtypes", [supplier_service_1.SupplierService])
], SupplierController);
exports.SupplierController = SupplierController;
//# sourceMappingURL=supplier.controller.js.map