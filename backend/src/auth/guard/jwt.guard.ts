import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedException } from '@nestjs/common';


export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }

}