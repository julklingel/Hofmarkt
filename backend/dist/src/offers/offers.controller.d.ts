import { offerDto } from './dto';
import { OffersService } from './offers.service';
export declare class OfferController {
    private productsService;
    constructor(productsService: OffersService);
    getAllOffers(): import("@prisma/client").PrismaPromise<import("@prisma/client").Offer[]>;
    getOffer(id: string): any;
    createOffer(dto: offerDto): import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
}
