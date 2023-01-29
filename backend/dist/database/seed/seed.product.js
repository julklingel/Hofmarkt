"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const apple = await prisma.product.upsert({
        where: { id: 'Apple100' },
        update: {},
        create: {
            title: 'apple',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const banana = await prisma.product.upsert({
        where: { id: 'Banana200' },
        update: {},
        create: {
            title: 'banana',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const orange = await prisma.product.upsert({
        where: { id: 'Orange300' },
        update: {},
        create: {
            title: 'orange',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const strawberry = await prisma.product.upsert({
        where: { id: 'Strawberry400' },
        update: {},
        create: {
            title: 'strawberry',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const kiwi = await prisma.product.upsert({
        where: { id: 'Kiwi500' },
        update: {},
        create: {
            title: 'kiwi',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const watermelon = await prisma.product.upsert({
        where: { id: 'Watermelon600' },
        update: {},
        create: {
            title: 'watermelon',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const pineapple = await prisma.product.upsert({
        where: { id: 'Pineapple700' },
        update: {},
        create: {
            title: 'pineapple',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const mango = await prisma.product.upsert({
        where: { id: 'Mango800' },
        update: {},
        create: {
            title: 'mango',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const papaya = await prisma.product.upsert({
        where: { id: 'Papaya900' },
        update: {},
        create: {
            title: 'papaya',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
    const avocado = await prisma.product.upsert({
        where: { id: 'Avocado1000' },
        update: {},
        create: {
            title: 'avocado',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        },
    });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.product.js.map