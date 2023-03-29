 
 import { Injectable, } from '@nestjs/common';
 import { PrismaService } from '../db-module/prisma.service';
 
 
 @Injectable()
 export class MailService {
   constructor(private readonly prisma: PrismaService) {}

 }