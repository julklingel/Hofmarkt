import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from './dto';
export declare class OfferService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getOffers(): any;
    getOffer(id: any): any;
    createOffer(dto: offerDto): import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
}
