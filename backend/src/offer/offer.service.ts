import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { enumImageType, enumOwnerType } from '@prisma/client';
import { PrismaService } from '../db-module/prisma.service';
import { offerDto } from './dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { userInterface } from 'src/interface';

@Injectable()
export class OfferService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async getOffers(): Promise<any> {
    const offers = await this.prisma.offer.findMany({
      include: {
        supplier: {
          select: {
            slug: true,
            companyName: true,
          },
        },
      },
    });

    const offersWithImages = await Promise.all(
      offers.map(async (offer) => {
        const images = await this.prisma.image.findMany({
          where: {
            ownerId: offer.id,
            ownerType: enumOwnerType.OFFER,
            type: enumImageType.OFFER,
          },
          select: {
            imageUrl: true,
            type: true,
          },
        });

        return {
          ...offer,
          images,
        };
      }),
    );

    return offersWithImages;
  }

  getOffer(id: string): any {
    return this.prisma.offer.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getOffersBySupplier(id: string): Promise<any> {
    const offers = await this.prisma.offer.findMany({
      where: {
        supplierId: id,
      },
    });

    const offersWithImages = await Promise.all(
      offers.map(async (offer) => {
        const images = await this.prisma.image.findMany({
          where: {
            ownerId: offer.id,
            ownerType: enumOwnerType.OFFER,
            type: enumImageType.OFFER,
          },
        });

        return {
          ...offer,
          images,
        };
      }),
    );

    return offersWithImages;
  }

  async createOffer(
    dto: offerDto,
    user: userInterface,
    files: Express.Multer.File[] = [],
  ) {
    const { id } = user;

    const supplier = await this.prisma.supplier.findFirst({
      where: { account: { id: id } },
    });

    const price = Number(dto.price);
    const amount = Number(dto.amount);

    const offer = await this.prisma.offer.create({
      data: {
        title: dto.title,
        price,
        unit: dto.unit,
        amount,
        supplier: {
          connect: {
            id: supplier.id,
          },
        },
      },
    });

    if (files.length > 0) {
      try {
        for (let index = 0; index < files.length; index++) {
          const file = files[index];
          const image = await this.cloudinaryService.uploadImage(file);
          const imageUrl = image.secure_url;

          await this.prisma.image.create({
            data: {
              imageUrl: imageUrl,
              type: enumImageType.OFFER,
              ownerId: offer.id,
              ownerType: enumOwnerType.OFFER,
            },
          });
        }
      } catch (e) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
    }

    return offer;
  }

  async patchOffer(
    id: string,
    dto: offerDto,
    user: userInterface,
    files: Express.Multer.File[] = [],
  ): Promise<any> {
    const { id: userId } = user;

    const supplier = await this.prisma.supplier.findFirst({
      where: { account: { id: userId } },
    });

    const offer = await this.prisma.offer.findUnique({
      where: { id: id },
    });

    if (!offer) {
      throw new HttpException('Offer not found', HttpStatus.NOT_FOUND);
    }

    if (offer.supplierId !== supplier.id) {
      throw new HttpException(
        'You are not authorized to update this offer',
        HttpStatus.FORBIDDEN,
      );
    }

    const updateData: any = {
      title: dto.title,
      price: Number(dto.price),
      unit: dto.unit,
      amount: Number(dto.amount),
    };

    if (files.length > 0) {
      const imageUrls = [];

      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const image = await this.cloudinaryService.uploadImage(file);

        imageUrls.push(image.secure_url);

        if (!imageUrls) {
          throw new HttpException(
            'An error occurred while uploading the images',
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      const offerImage = imageUrls.map((imageUrl) => {
        return {
          imageUrl: imageUrl,
          type: enumImageType.OFFER,
          ownerId: offer.id,
          ownerType: enumOwnerType.OFFER,
        };
      });

      for (const imageData of offerImage) {
        await this.prisma.image.create({ data: imageData });
      }
    }

    try {
      return this.prisma.offer.update({
        where: { id: id },
        data: updateData,
      });
    } catch (e) {
      throw new HttpException('Something went wrong.', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteOffer(offerId: string, user: userInterface) {
    const { id: userId } = user;

    const offer = await this.prisma.offer.findUnique({
      where: { id: offerId },
      include: { supplier: { select: { accountId: true } } },
    });

    if (!offer) {
      throw new HttpException('Offer not found', HttpStatus.NOT_FOUND);
    }
  
  

    if (offer.supplier.accountId !== userId) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    try {
      await this.prisma.$transaction([
        this.prisma.watchlist.deleteMany({ where: { id: offerId } }),
        this.prisma.order.deleteMany({ where: { offerId } }),
        this.prisma.image.deleteMany({ where: { offerId } }),
        this.prisma.offer.delete({ where: { id: offerId } }),
      ]);
    } catch (err) {
      throw new HttpException(
        'something went wrong while deleting the offer',
        HttpStatus.BAD_REQUEST,
      );
    }

    return 'Offer deleted';
  }
}
