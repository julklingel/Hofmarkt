import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';
<<<<<<< HEAD
export declare class OffersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllOffers(): import("@prisma/client").PrismaPromise<import("@prisma/client").Offer[]>;
    getOneOffer(id: any): any;
=======
export declare class OfferService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getOffers(): any;
    getOffer(id: any): any;
>>>>>>> 02e68d1 (b: replace product by offer)
    createOffer(dto: offerDto): import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
}
