import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { addressDto } from '../address';
import { userDto } from './dto';
import { PrismaService } from '../db-module/prisma.service';
import { enumImageType } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  getOwnUser(user) {
    user = {
      id: user.id,
      email: user.email,
    };
    return user;
  }

  async createUser(user, dto: userDto, address: addressDto, file: any = 0) {
    const { id, role } = user;
    if (role !== 'BUYER')
      throw new HttpException(
        'You are not authorized to create a user account',
        HttpStatus.BAD_REQUEST,
      );

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
      await this.prisma.user.create({
        data: newUserData,
        include: {
          profileImage: true,
        },
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
