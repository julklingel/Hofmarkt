import { enumRole, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedSupplier() {

  const alexImker = await prisma.supplier.upsert({
    where: { companyEmail: 'ammer-imker@info.com' },
    update: {},
    create: {
      

  const manfredHof = await prisma.supplier.upsert({
    where: { companyEmail: 'm-hof@info.com' },
    update: {},
    create: {
      companyName: 'Manfred Hof',
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'Farmhouse.jpeg',
      companyBio: 'Ilgen special farm products',
      slug: 'manfred-hof',
      featured: true,
      offer: {
        create: [
          {
            title: 'Eier',
            category: {
              connectOrCreate: {
                where: { name: 'eggs' },
                create: { name: 'eggs' },
              },
            },
            img: 'eier.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Milk',
            category: {
              connectOrCreate: {
                where: { name: 'diary' },
                create: { name: 'diary' },
              },
            },
            img: 'milk.jpeg',
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
      
        ],
      },
    },
  });

  const mariaBaker = await prisma.supplier.upsert({
    where: { companyEmail: 'maria-bread@info.com' },
    update: {},
    create: {
      
        ],
      },
    },
  });

  const markusFisher = await prisma.supplier.upsert({
    where: { companyEmail: 'markusFischer@info.com' },
    update: {},
    create: {
     
        ],
      },
    },
  });
}
