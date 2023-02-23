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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db-module/prisma.service");
let SupplierService = class SupplierService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getSuppliers() {
        const supplier = await this.prisma.supplier.findMany({
            select: {
                companyName: true,
                companyAddress: true,
                companyImage: true,
                slug: true,
            },
        });
        return supplier;
    }
    async getFeaturedSuppliers() {
        const suppliers = await this.prisma.supplier.findMany({
            where: {
                featured: true,
            },
            select: {
                companyName: true,
                companyAddress: true,
                companyImage: true,
                slug: true,
            },
        });
        return suppliers;
    }
    async getSupplier(id) {
        return await this.prisma.supplier.findUnique({
            where: {
                id: id,
            },
        });
    }
    createSupplier(dto) {
        const phoneNum = Number(dto.companyPhone);
        const featured = Boolean(dto.featured);
        return this.prisma.supplier.create({
            data: {
                companyName: dto.companyName,
                companyLogo: dto.companyLogo,
                companyPhone: phoneNum,
                companyAddress: dto.companyAddress,
                companyImage: dto.companyImage,
                companyBio: dto.companyBio,
                slug: dto.slug,
                featured: featured,
            },
        });
    }
};
SupplierService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SupplierService);
exports.SupplierService = SupplierService;
//# sourceMappingURL=supplier.service.js.map