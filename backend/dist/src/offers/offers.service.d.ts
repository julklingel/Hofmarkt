import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';
export declare class OffersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllOffers(): import("@prisma/client").PrismaPromise<import("@prisma/client").Offer[]>;
    getOneOffer(id: any): any;
    createOffer(dto: offerDto): import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
}
