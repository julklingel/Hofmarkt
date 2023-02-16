"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSupplier = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedSupplier() {
    const klausObstler = await prisma.supplier.upsert({
        where: { companyEmail: 'klaus-obstler@info.com' },
        update: {},
        create: {
            companyName: 'Klaus Obstler',
            companyEmail: 'klaus-obstler@info.com',
            companyLogo: 'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
            companyPhone: 123456789,
            companyAddress: '1234 Main St',
            companyImage: 'obstler.jpeg',
            companyBio: 'Klaus hat einen Obstbaum Garten',
            slug: 'klaus-obstler',
            role: client_1.enumRole.SUPPLIER,
            offer: {
                create: [
                    {
                        title: 'orange',
                        category: {
                            connectOrCreate: {
                                where: { name: 'fruit' },
                                create: { name: 'fruit' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                    {
                        title: 'apple',
                        category: {
                            connectOrCreate: {
                                where: { name: 'fruit' },
                                create: { name: 'fruit' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                    {
                        title: 'banana',
                        category: {
                            connectOrCreate: {
                                where: { name: 'fruit' },
                                create: { name: 'fruit' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                ],
            },
        },
    });
    const alexImker = await prisma.supplier.upsert({
        where: { companyEmail: 'ammer-imker@info.com' },
        update: {},
        create: {
            companyName: 'Ammersee Imkerei GmbH',
            companyEmail: 'alex-imker@info.com',
            companyLogo: 'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
            companyPhone: 123456789,
            companyAddress: '1234 Main St',
            companyImage: 'Imkerei.jpeg',
            companyBio: 'The best honey in the world comes from Ammersee',
            slug: 'ammer-imker',
            role: client_1.enumRole.SUPPLIER,
            featured: true,
            offer: {
                create: [
                    {
                        title: 'flower-honey',
                        category: {
                            connectOrCreate: {
                                where: { name: 'honey' },
                                create: { name: 'honey' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                    {
                        title: 'wood-honey',
                        category: {
                            connectOrCreate: {
                                where: { name: 'honey' },
                                create: { name: 'honey' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                ],
            },
        },
    });
    const manfredHof = await prisma.supplier.upsert({
        where: { companyEmail: 'm-hof@info.com' },
        update: {},
        create: {
            companyName: 'Manfred Hof',
            companyEmail: 'm-hof@info.com',
            companyLogo: 'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
            companyPhone: 123456789,
            companyAddress: '1234 Main St',
            companyImage: 'Farmhouse.jpeg',
            companyBio: 'Ilgen special farm products',
            slug: 'manfred-hof',
            role: client_1.enumRole.SUPPLIER,
            featured: true,
            offer: {
                create: [
                    {
                        title: 'eggs',
                        category: {
                            connectOrCreate: {
                                where: { name: 'eggs' },
                                create: { name: 'eggs' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                    {
                        title: 'milk',
                        category: {
                            connectOrCreate: {
                                where: { name: 'diary' },
                                create: { name: 'diary' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                ],
            },
        },
    });
    const dominikHunter = await prisma.supplier.upsert({
        where: { companyEmail: 'dhunter@gmail.com' },
        update: {},
        create: {
            companyName: 'Dominik Hunter',
            companyEmail: 'dhunter@gmail.com',
            companyLogo: 'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
            companyPhone: 123456789,
            companyAddress: '1234 Main St',
            companyImage: 'hunter-4436354_1920.jpg',
            companyBio: 'Ilgen special farm products',
            slug: 'dominik-hunter',
            role: client_1.enumRole.SUPPLIER,
            offer: {
                create: [
                    {
                        title: 'pork',
                        category: {
                            connectOrCreate: {
                                where: { name: 'meat' },
                                create: { name: 'meat' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                    {
                        title: 'beef',
                        category: {
                            connectOrCreate: {
                                where: { name: 'meat' },
                                create: { name: 'meat' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                ],
            },
        },
    });
    const mariaBaker = await prisma.supplier.upsert({
        where: { companyEmail: 'maria-bread@info.com' },
        update: {},
        create: {
            companyName: 'Bäckerei Maria',
            companyEmail: 'maria-bread@info.com',
            companyLogo: 'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
            companyPhone: 123456789,
            companyAddress: '1234 Main St',
            companyImage: 'Bäckerei_Bayer_1.webp',
            companyBio: "Bäckerei Maria's bread is the best in the world",
            slug: 'maria-baker',
            role: client_1.enumRole.SUPPLIER,
            offer: {
                create: [
                    {
                        title: 'bread',
                        category: {
                            connectOrCreate: {
                                where: { name: 'grain' },
                                create: { name: 'grain' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                    {
                        title: 'buns',
                        category: {
                            connectOrCreate: {
                                where: { name: 'grain' },
                                create: { name: 'grain' },
                            },
                        },
                        img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
                        price: 1.99,
                        unit: 'lb',
                        amount: 100,
                    },
                ],
            },
        },
    });
}
exports.seedSupplier = seedSupplier;
//# sourceMappingURL=seed.supplier.js.map