import { enumRole, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedSupplier() {
  const klausObstler = await prisma.supplier.upsert({
    where: { companyEmail: 'klaus-obstler@info.com' },
    update: {},
    create: {
      companyName: 'Klaus Obstler',
      companyEmail: 'klaus-obstler@info.com',
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'obstler.jpeg',
      companyBio: 'Klaus hat einen Obstbaum Garten',
      slug: 'klaus-obstler',
      role: enumRole.SUPPLIER,
      offer: {
        create: [
          {
            title: 'Orange',
            category: {
              connectOrCreate: {
                where: { name: 'fruit' },
                create: { name: 'fruit' },
              },
            },
            img: 'orange.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Apple',
            category: {
              connectOrCreate: {
                where: { name: 'fruit' },
                create: { name: 'fruit' },
              },
            },
            img: 'apple.jpg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Bananen',
            category: {
              connectOrCreate: {
                where: { name: 'fruit' },
                create: { name: 'fruit' },
              },
            },
            img: 'banana.jpeg',
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
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'Imkerei.jpeg',
      companyBio: 'The best honey in the world comes from Ammersee',
      slug: 'ammer-imker',
      role: enumRole.SUPPLIER,
      featured: true,
      offer: {
        create: [
          {
            title: 'Feld Honig',
            category: {
              connectOrCreate: {
                where: { name: 'honey' },
                create: { name: 'honey' },
              },
            },
            img: 'flower-honey.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Wald Honig',
            category: {
              connectOrCreate: {
                where: { name: 'honey' },
                create: { name: 'honey' },
              },
            },
            img: 'forresthoney.jpeg',
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
      companyImage: 'Farmhouse.jpeg',
      companyBio: 'Ilgen special farm products',
      slug: 'manfred-hof',
      role: enumRole.SUPPLIER,
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
      companyName: 'Dominik Hunter',
      companyEmail: 'dhunter@gmail.com',
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'hunter-4436354_1920.jpg',
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
            img: 'pork.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Beef',
            category: {
              connectOrCreate: {
                where: { name: 'meat' },
                create: { name: 'meat' },
              },
            },
            img: 'beef.jpeg',
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
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'Bäckerei_Bayer_1.webp',
      companyBio: "Bäckerei Maria's bread is the best in the world",
      slug: 'maria-baker',
      role: enumRole.SUPPLIER,
      offer: {
        create: [
          {
            title: 'Kürbiskernbrot',
            category: {
              connectOrCreate: {
                where: { name: 'grain' },
                create: { name: 'grain' },
              },
            },
            img: 'bread.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Buns',
            category: {
              connectOrCreate: {
                where: { name: 'grain' },
                create: { name: 'grain' },
              },
            },
            img: 'buns.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
        ],
      },
    },
  });

  const markusFisher = await prisma.supplier.upsert({
    where: { companyEmail: 'markusFischer@info.com' },
    update: {},
    create: {
      companyName: 'Markus Fischer',
      companyEmail: 'markusFischer@info.com',
      companyLogo:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      companyImage: 'fisher.jpg',
      companyBio: 'Fish from the Ammersee and the Starnberger See',
      slug: 'markus-fisher',
      role: enumRole.SUPPLIER,
      offer: {
        create: [
          {
            title: 'Trout',
            category: {
              connectOrCreate: {
                where: { name: 'fish' },
                create: { name: 'fish' },
              },
            },
            img: 'trout.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
          {
            title: 'Salmon',
            category: {
              connectOrCreate: {
                where: { name: 'fish' },
                create: { name: 'fish' },
              },
            },
            img: 'salmon.jpeg',
            price: 1.99,
            unit: 'lb',
            amount: 100,
          },
        ],
      },
    },
  });
}
