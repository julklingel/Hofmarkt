import { enumRole, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedSupplier() {
  const nestle = await prisma.supplier.upsert({
    where: { companyEmail: 'neste@info.com' },
    update: {},
    create: {
      companyName: 'Nestle',
      companyEmail: 'neste@info.com',
      companyLogo:
        'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      role: enumRole.SUPPLIER,
      offer: {
        create: [{
          title: 'orange',
          category: 'fruit',
          img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
          price: 1.99,
          unit: 'lb',
          amount: 100,
        },
        {
          title: 'apple',
          category: 'fruit',
          img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
          price: 1.99,
          unit: 'lb',
          amount: 100,
        },
        {
          title: 'banana',
          category: 'fruit',
          img: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
          price: 1.99,
          unit: 'lb',
          amount: 100,
        },
      
      ]
      },
    },
  });
}
