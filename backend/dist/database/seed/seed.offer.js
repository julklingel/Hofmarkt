const offerList = [
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
];
//# sourceMappingURL=seed.offer.js.map