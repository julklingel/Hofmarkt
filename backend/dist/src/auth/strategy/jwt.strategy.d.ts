import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/db-module/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly config;
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<import("@prisma/client").Account>;
}
export {};
