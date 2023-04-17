import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { enumImageType } from '@prisma/client';
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

  getOffers(): any {
    const offers = this.prisma.offer.findMany({
      include: {
        supplier: {
          select: {
            slug: true,
            companyName: true,
          },
        },
        images: {
          select: {
            imageUrl: true,
            type: true,
          },
        },
      },
    });

    return offers;
  }

  getOffer(id): any {
    return this.prisma.offer.findUnique({
      where: {
        id: id,
      },
    });
  }

  getOffersBySupplier(id): any {
    return this.prisma.offer.findMany({
      where: {
        supplierId: id,
      },
      include: {
        images: {
          select: {
            imageUrl: true,
            type: true,
          },
        },
      },
    });
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

    const imageUrls = [];

    if (files.length > 0) {
      try {
        for (let index = 0; index < files.length; index++) {
          const file = files[index];
          const image = await this.cloudinaryService.uploadImage(file);
          imageUrls.push(image.secure_url);
        }
      } catch (e) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
    }

    const offerImage = imageUrls.map((imageUrl) => {
      return {
        imageUrl: imageUrl,
        type: enumImageType.OFFER,
      };
    });
    return this.prisma.offer.create({
      data: {
        title: dto.title,
        images: { create: offerImage },
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
  }

  async patchOffer(
    id: string,
    dto: offerDto,
    user: userInterface,
    files: Express.Multer.File[],
  ): Promise<any> {
    const { id: userId } = user;

    if (user.role !== 'SUPPLIER') {
      throw new HttpException(
        'You are not authorized to update this offer',
        HttpStatus.FORBIDDEN,
      );
    }

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
        };
      });

      updateData.images = {
        create: offerImage,
      };
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
}
