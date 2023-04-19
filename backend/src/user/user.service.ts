import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { addressDto } from '../address';
import { userDto } from './dto';
import { PrismaService } from '../db-module/prisma.service';
import { enumImageType, enumOwnerType } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { userInterface } from '../interface';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  getOwnUser(user: userInterface) {
    const { id, email } = user;
    //add to get images
    return { id, email };
  }

  async createUser(
    user: userInterface,
    dto: userDto,
    address: addressDto,
    file: any = 0,
  ) {
    const { id } = user;

    const existingUser = await this.prisma.account.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });

    if (existingUser.user) {
      throw new HttpException(
        'The account already has a User',
        HttpStatus.BAD_REQUEST,
      );
    }

    let imageUrl = null;

    if (file) {
      const response = await this.cloudinaryService.uploadImage(file);
      imageUrl = response.secure_url ? response.secure_url : null;
      if (imageUrl === null) {
        throw new HttpException(
          'Image could not be uploaded',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const newAddressData = {
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      country: address.country,
      zip: address.zip,
      account: {
        connect: {
          id: id,
        },
      },
    };

    const newImageData = imageUrl
      ? {
          imageUrl,
          type: enumImageType.PROFILE,
          ownerType: enumOwnerType.USER,
        }
      : null;

    const newUserData: any = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      account: {
        connect: {
          id: id,
        },
      },
    };

    if (newImageData) {
      newUserData.profileImage = {
        create: newImageData,
      };
    }

    try {
      const createdUser = await this.prisma.user.create({
        data: newUserData,
      });

      await this.prisma.image.create({
        data: { ownerId: createdUser.id, ...newImageData },
      });

      await this.prisma.accountAddress.create({
        data: newAddressData,
        include: {
          account: true,
        },
      });

      return 'user created with name ' + dto.firstName;
    } catch (err) {
      if (err.code === 'P2002' && err.meta.target.includes('supplierId')) {
        throw new HttpException(
          'An account can only have one user',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
