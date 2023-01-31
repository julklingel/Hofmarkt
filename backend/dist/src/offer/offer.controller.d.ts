import { offerDto } from './dto';
import { OfferService } from './offer.service';
export declare class OfferController {
    private offerService;
    constructor(offerService: OfferService);
    getOffers(): any;
    getOffer(id: string): any;
    createOffer(dto: offerDto): import("@prisma/client").Prisma.Prisma__OfferClient<import("@prisma/client").Offer, never>;
}
