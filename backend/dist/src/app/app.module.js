"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const offers_module_1 = require("../offers/offers.module");
const prisma_module_1 = require("../db-module/prisma.module");
let AppModule = AppModule_1 = class AppModule {
};
AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
<<<<<<< HEAD
        imports: [AppModule_1, products_module_1.ProductModule, offers_module_1.OfferModule, auth_module_1.AuthModule, user_module_1.UserModule, prisma_module_1.PrismaModule, config_1.ConfigModule.forRoot()],
=======
        imports: [AppModule_1, auth_module_1.AuthModule, user_module_1.UserModule, offers_module_1.OfferModule, prisma_module_1.PrismaModule, config_1.ConfigModule.forRoot()],
>>>>>>> 02e68d1 (b: replace product by offer)
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map