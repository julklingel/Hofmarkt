import { offerDto } from './dto';
<<<<<<< HEAD
import { OffersService } from './offers.service';
export declare class OfferController {
    private productsService;
    constructor(productsService: OffersService);
    getAllOffers(): import("@prisma/client").PrismaPromise<import("@prisma/client").Offer[]>;
=======
import { OfferService } from './offers.service';
export declare class OfferController {
    private offerService;
    constructor(offerService: OfferService);
    getOffers(): any;
>>>>>>> 02e68d1 (b: replace product by offer)
    getOffer(id: string): any;
    createOffer(dto: offerDto): import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
}
