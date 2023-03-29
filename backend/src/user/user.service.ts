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

  async createUser(user, dto: userDto, address: addressDto, file: any) {
    console.log('user', dto);
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

    const response = await this.cloudinaryService.uploadImage(file);

    const imageUrl = response.secure_url ? response.secure_url : null;

    const newAddressData = {
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      country: address.country,
      zip: address.zip,
    };

    const newUserData = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      profileImage: {
        create: {
          imageUrl: imageUrl,
          type: enumImageType.PROFILE,
        },
      },
      AccountAddress: {
        create: newAddressData,
      },
      account: {
        connect: {
          id: id,
        },
      },
    };

    try {
      await this.prisma.user.create({
        data: newUserData,
        include: {
          AccountAddress: true,
          Image: true,
        },
      });
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
