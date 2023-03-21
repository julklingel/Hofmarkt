import { enumRole, PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

export async function seedSupplier() {
  const hash = await argon2.hash('supplier123');
  const salt = await randomBytes(16);

  const klausObstler = await prisma.account.upsert({
    where: { email: 'klaus-obstler@info.com' },
    update: {},
    create: {
      email: 'klaus-obstler@info.com',
      password: hash,
      salt: salt,
      role: enumRole.SUPPLIER,
      supplier: {
        create: {
          companyName: 'Klaus Obstler',
          companyLogo:
            'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
          companyPhone: 123456789,
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Munich',
              state: 'Bavaria',
              country: 'Germany',
              zip: '12345',
            },
          },
          companyImage: 'obstler.jpeg',
          companyBio: 'Klaus hat einen Obstbaum Garten',
          slug: 'klaus-obstler',
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
      },
    },
  });

  const alexImker = await prisma.account.upsert({
    where: { email: 'ammer-imker@info.com' },
    update: {},
    create: {
      email: 'ammer-imker@info.com',
      password: hash,
      salt: salt,
      role: enumRole.SUPPLIER,
      supplier: {
        create: {
          companyName: 'Ammersee Imkerei GmbH',
          companyLogo:
            'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
          companyPhone: 123456789,
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          companyImage: 'Imkerei.jpeg',
          companyBio: 'The best honey in the world comes from Ammersee',
          slug: 'ammer-imker',
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
      },
    },
  });

  const manfredHof = await prisma.account.upsert({
    where: { email: 'm-hof@info.com' },
    update: {},
    create: {
      email: 'm-hof@info.com',
      password: hash,
      salt: salt,
      role: enumRole.SUPPLIER,
      supplier: {
        create: {
          companyName: 'Manfred Hof',
          companyLogo:
            'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
          companyPhone: 123456789,
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
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
      },
    },
  });

  const dominikHunter = await prisma.account.upsert({
    where: { email: 'dhunter@gmail.com' },
    update: {},
    create: {
      email: 'dhunter@gmail.com',
      password: hash,
      salt: salt,
      role: enumRole.SUPPLIER,
      supplier: {
        create: {
          companyName: 'Dominik Hunter',
          companyLogo:
            'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
          companyPhone: 123456789,
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          companyImage: 'hunter-4436354_1920.jpg',
          companyBio: 'Ilgen special farm products',
          slug: 'dominik-hunter',
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
      },
    },
  });

  const mariaBaker = await prisma.account.upsert({
    where: { email: 'maria-bread@info.com' },
    update: {},
    create: {
      email: 'maria-bread@info.com',
      password: hash,
      salt: salt,
      role: enumRole.SUPPLIER,
      supplier: {
        create: {
          companyName: 'Bäckerei Maria',
          companyLogo:
            'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
          companyPhone: 123456789,
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          companyImage: 'Bäckerei_Bayer_1.webp',
          companyBio: "Bäckerei Maria's bread is the best in the world",
          slug: 'maria-baker',
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
      },
    },
  });

  const markusFisher = await prisma.account.upsert({
    where: { email: 'markusFischer@info.com' },
    update: {},
    create: {
      email: 'markusFischer@info.com',
      password: hash,
      salt: salt,
      role: enumRole.SUPPLIER,
      supplier: {
        create: {
          companyName: 'Markus Fischer',
          companyLogo:
            'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
          companyPhone: 123456789,
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          companyImage: 'fisher.jpg',
          companyBio: 'Fish from the Ammersee and the Starnberger See',
          slug: 'markus-fisher',
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
      },
    },
  });
}
