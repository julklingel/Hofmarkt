import { enumImageType, enumRole, PrismaClient } from '@prisma/client';
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
          companyLogo: {
            create: {
              imageUrl:
                'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
              type: enumImageType.PROFILE,
            },
          },
          companyPhone: '123456789',
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Munich',
              state: 'Bavaria',
              country: 'Germany',
              zip: '12345',
            },
          },
          supplierImage: {
            create: {
              imageUrl: 'obstler.jpeg',
              type: enumImageType.FACILITY,
            },
          },
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
                images: {
                  create: {
                    imageUrl: 'orange.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'apple.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'banana.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
          companyLogo: {
            create: {
              imageUrl:
                'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
              type: enumImageType.PROFILE,
            },
          },
          companyPhone: '123456789',
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          supplierImage: {
            create: {
              imageUrl: 'Imkerei.jpeg',
              type: enumImageType.FACILITY,
            },
          },
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
                images: {
                  create: {
                    imageUrl: 'flower-honey.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'forest-honey.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
          companyLogo: {
            create: {
              imageUrl:
                'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
              type: enumImageType.PROFILE,
            },
          },
          companyPhone: '123456789',
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          supplierImage: {
            create: {
              imageUrl: 'Farmhouse.jpeg',
              type: enumImageType.FACILITY,
            },
          },
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
                images: {
                  create: {
                    imageUrl: 'egg.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'milk.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
          companyLogo: {
            create: {
              imageUrl:
                'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
              type: enumImageType.PROFILE,
            },
          },
          companyPhone: '123456789',
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          supplierImage: {
            create: {
              imageUrl: 'hunter-4436354_1920.jpg',
              type: enumImageType.FACILITY,
            },
          },
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
                images: {
                  create: {
                    imageUrl: 'pork.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'beef.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
          companyLogo: {
            create: {
              imageUrl:
                'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
              type: enumImageType.PROFILE,
            },
          },
          companyPhone: '123456789',
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          supplierImage: {
            create: {
              imageUrl: 'Bäckerei_Bayer_1.webp',
              type: enumImageType.FACILITY,
            },
          },
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
                images: {
                  create: {
                    imageUrl: 'bread.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'buns.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
          companyLogo: {
            create: {
              imageUrl:
                'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
              type: enumImageType.PROFILE,
            },
          },
          companyPhone: '123456789',
          AccountAddress: {
            create: {
              streetAddress: '1234 Main St',
              city: 'Starnberg',
              state: 'Bavaria',
              country: 'Germany',
              zip: '82319',
            },
          },
          supplierImage: {
            create: {
              imageUrl: 'fisher.jpg',
              type: enumImageType.FACILITY,
            },
          },

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
                images: {
                  create: {
                    imageUrl: 'trout.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
                images: {
                  create: {
                    imageUrl: 'salmon.jpeg',
                    type: enumImageType.OFFER,
                  },
                },
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
