"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const argon2 = require("argon2");
const prisma_service_1 = require("../db-module/prisma.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, config, jwt) {
        this.prisma = prisma;
        this.config = config;
        this.jwt = jwt;
    }
    async signToken(account) {
        const secret = this.config.get('JWT_secret');
        const payload = {
            email: account.email,
            sub: account.id,
        };
        const token = this.jwt.sign(payload, {
            expiresIn: '30m',
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
    async mailAlreadyExists(email) {
        return await this.prisma.account.findUnique({
            where: { email: email.toLowerCase() },
        });
    }
    async signup(dto) {
        dto.isSupplier;
        try {
            const mailExists = await this.mailAlreadyExists(dto.email);
            console.log(mailExists);
            if (!mailExists) {
                const hashedPassword = await argon2.hash(dto.password);
                const account = await this.prisma.account.create({
                    data: {
                        email: dto.email.toLowerCase(),
                        password: hashedPassword,
                        role: dto.isSupplier ? 'SUPPLIER' : 'BUYER',
                    },
                });
                return this.signToken(account);
            }
            else {
                throw new common_1.ForbiddenException('Wrong Credentials');
            }
        }
        catch (error) {
            if (error.code === 'P2002' && error.meta.target.includes('email')) {
                throw new common_1.ForbiddenException('Wrong Credentials');
            }
            throw new Error('Something went wrong');
        }
    }
    async login(dto) {
        const account = await this.prisma.account.findUnique({
            where: {
                email: dto.email.toLowerCase(),
            },
            select: {
                id: true,
                email: true,
                password: true,
            },
        });
        if (!account) {
            throw new common_1.ForbiddenException('Wrong Credentials');
        }
        const passwordValid = await argon2.verify(account.password, dto.password);
        if (!passwordValid) {
            throw new common_1.ForbiddenException('Wrong Credentials');
        }
        delete account.password;
        return this.signToken(account);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map