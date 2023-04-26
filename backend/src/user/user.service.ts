import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { addressDto, updateAddressDto } from '../address';
import { userDto, updateUserDto } from './dto';
import { PrismaService } from '../db-module/prisma.service';
import { enumImageType, enumRole } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { userInterface } from '../auth/dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async getOwnUser(user: userInterface) {
    const { id } = user;
    const email = await this.prisma.account.findUnique({
      where: {
        id: id,
      },
      select: {
        email: true,
      },
    });
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
          ownerType: enumRole.BUYER,
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

    try {
      const createdUser = await this.prisma.user.create({
        data: newUserData,
      });

      if (newImageData) {
        await this.prisma.image.create({
          data: { ownerId: createdUser.id, ...newImageData },
        });
      }
      await this.prisma.accountAddress.create({
        data: newAddressData,
        include: {
          account: true,
        },
      });

      return createdUser.id;
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

  async updateUser(
    id: string,
    user: userInterface,
    dto: updateUserDto,
    address: updateAddressDto,
    file: any = null,
  ) {
    const { id: userId } = user;

    const existingUser = await this.prisma.user.findUnique({
      where: { id },
      include: { account: { select: { id: true } } },
    });

    if (!existingUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (existingUser.account.id !== userId) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
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

    const updatedAddressData = {
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      country: address.country,
      zip: address.zip,
    };

    const updatedUserData: any = {
      firstName: dto.firstName,
      lastName: dto.lastName,
    };

    if (imageUrl) {
      updatedUserData.profileImage = {
        create: {
          imageUrl,
          type: enumImageType.PROFILE,
        },
      };
    }

    try {
      await this.prisma.$transaction([
        this.prisma.user.update({
          where: { id },
          data: updatedUserData,
        }),
        this.prisma.accountAddress.updateMany({
          where: { accountId: userId },
          data: updatedAddressData,
        }),
      ]);

      return 'User updated successfully';
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteUser(id: string, user: userInterface) {
    const { id: userId } = user;

    const existingUser = await this.prisma.user.findUnique({
      where: { id },
      include: { account: { select: { id: true } } },
    });

    if (!existingUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (existingUser.account.id !== userId) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    try {
      await this.prisma.$transaction([
        this.prisma.review.deleteMany({ where: { userId } }),
        this.prisma.order.deleteMany({ where: { userId } }),
        this.prisma.accountAddress.deleteMany({
          where: { accountId: existingUser.accountId },
        }),
        this.prisma.user.delete({ where: { id } }),
        this.prisma.account.delete({ where: { id: existingUser.accountId } }),
      ]);
    } catch (err) {
      throw new HttpException(
        'something went wrong while deleting the account',
        HttpStatus.BAD_REQUEST,
      );
    }
    return 'User deleted';
  }
}
