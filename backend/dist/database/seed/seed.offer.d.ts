declare const offerList: {
    title: string;
    category: {
        connectOrCreate: {
            where: {
                name: string;
            };
            create: {
                name: string;
            };
        };
    };
    img: string;
    price: number;
    unit: string;
    amount: number;
}[];
