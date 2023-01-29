import { offerDto } from './dto';
import { OffersService } from './offers.service';
export declare class OfferController {
    private productsService;
    constructor(productsService: OffersService);
    getOffer(dto: offerDto): any;
    createOffer(dto: offerDto): {
        offer: import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
    };
}
