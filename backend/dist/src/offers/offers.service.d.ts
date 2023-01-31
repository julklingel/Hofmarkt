import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';
export declare class OffersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getOffer(dto: any): any;
    createOffer(dto: offerDto): {
        offer: import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
    };
}
