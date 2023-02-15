import { enumRole, PrismaClient } from '@prisma/client';
import { seedCategory } from './seed.category';




const prisma = new PrismaClient();

export async function seedSupplier() {
  
  const klausObstler = await prisma.supplier.upsert({
    where: { companyEmail: 'klaus-obstler@info.com' },
    update: {},
    create: {
      companyName: 'klaus-obstler',
      companyEmail: 'klaus-obstler@info.com',
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
      companyBio: 'Nestle is a food company',
      slug: 'nestle',
      role: enumRole.SUPPLIER,
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
    where: { companyEmail: 'alex-imker@info.com' },
    update: {},
    create: {
      companyName: 'alex-imker',
      companyEmail: 'alex-imker@info.com',
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
      companyBio: 'alex-imker is a food company',
      slug: 'alex-imker',
      role: enumRole.SUPPLIER,
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
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
      companyBio: 'Ilgen special farm products',
      slug: 'manfred-hof',
      role: enumRole.SUPPLIER,
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
      companyImage: 'https://www.nestle.com/sites/default/files/2018-10/nestle_logo.png',
      companyBio: 'Ilgen special farm products',
      slug: 'dominik-hunter',
      role: enumRole.SUPPLIER,
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


}
