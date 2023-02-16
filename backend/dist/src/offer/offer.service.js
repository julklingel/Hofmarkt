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
exports.OfferService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db-module/prisma.service");
let OfferService = class OfferService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getOffers() {
        const offers = this.prisma.offer.findMany({
            include: {
                supplier: {
                    select: {
                        slug: true,
                        companyName: true,
                        companyAddress: true,
                    },
                },
            },
        });
        return offers;
    }
    getOffer(id) {
        return this.prisma.offer.findUnique({
            where: {
                id: id,
            },
        });
    }
    getOffersBySupplier(id) {
        return this.prisma.offer.findMany({
            where: {
                supplierId: id,
            },
        });
    }
    createOffer(dto) {
        const price = Number(dto.price);
        const amount = Number(dto.amount);
        return this.prisma.offer.create({
            data: {
                title: dto.title,
                img: dto.img,
                price,
                unit: dto.unit,
                amount,
                supplier: {
                    connect: {
                        id: dto.supplierId,
                    },
                },
            },
        });
    }
};
OfferService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OfferService);
exports.OfferService = OfferService;
//# sourceMappingURL=offer.service.js.map