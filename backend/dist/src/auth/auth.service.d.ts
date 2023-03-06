import { ConfigService } from '@nestjs/config';
import { signupDto, loginDto } from './dto/auth.dto';
import { PrismaService } from 'src/db-module/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly prisma;
    private config;
    private jwt;
    constructor(prisma: PrismaService, config: ConfigService, jwt: JwtService);
    signToken(account: {
        email: string;
        id: string;
    }): Promise<{
        access_token: string;
    }>;
    mailAlreadyExists(email: string): Promise<import(".prisma/client").Account>;
    signup(dto: signupDto): Promise<{
        access_token: string;
    }>;
    login(dto: loginDto): Promise<{
        access_token: string;
    }>;
}
