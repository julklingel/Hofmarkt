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
          companyPhone: '123456789',
          companyBio: 'Klaus hat einen Obstbaum Garten',
          slug: 'klaus-obstler',
        },
      },
      address: {
        create: {
          streetAddress: 'Klaus Strasse',
          city: 'Munich',
          zip: '12345',
          state: 'Bavaria',
          country: 'Germany',
        },
      },
    },
    include: {
      supplier: true,
    },
  });

  const offerDataKlaus = [
    {
      title: 'Orange',
      imageUrl: 'orange.jpeg',
    },
    {
      title: 'Apple',
      imageUrl: 'apple.jpeg',
    },
    {
      title: 'Bananen',
      imageUrl: 'banana.jpeg',
    },
  ];

  for (const data of offerDataKlaus) {
    const createdOffer = await prisma.offer.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: { name: 'fruit' },
            create: { name: 'fruit' },
          },
        },
        price: 1.99,
        unit: 'lb',
        amount: 100,
        supplier: {
          connect: {
            id: klausObstler.supplier.id,
          },
        },
      },
    });

    await prisma.image.create({
      data: {
        imageUrl: data.imageUrl,
        type: enumImageType.OFFER,
        ownerId: createdOffer.id,
        ownerType: enumRole.SUPPLIER,
      },
    });
  }

  await prisma.image.create({
    data: {
      imageUrl:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      type: enumImageType.PROFILE,
      ownerId: klausObstler.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });

  await prisma.image.create({
    data: {
      imageUrl: 'obstler.jpeg',
      type: enumImageType.FACILITY,
      ownerId: klausObstler.supplier.id,
      ownerType: enumRole.SUPPLIER,
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
          companyPhone: '123456789',
          companyBio: 'The best honey in the world comes from Ammersee',
          slug: 'ammer-imker',
          featured: true,
        },
      },
      address: {
        create: {
          streetAddress: 'Klaus Strasse',
          city: 'Munich',
          zip: '12345',
          state: 'Bavaria',
          country: 'Germany',
        },
      },
    },
    include: {
      supplier: true,
    },
  });

  const offerDataAlex = [
    {
      title: 'Feld Honig',
      imageUrl: 'flower-honey.jpeg',
    },
    {
      title: 'Wald Honig',
      imageUrl: 'forest-honey.jpeg',
    },
  ];

  for (const data of offerDataAlex) {
    const createdOffer = await prisma.offer.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: { name: 'honey' },
            create: { name: 'honey' },
          },
        },
        price: 1.99,
        unit: 'lb',
        amount: 100,
        supplier: {
          connect: {
            id: alexImker.supplier.id,
          },
        },
      },
    });

    await prisma.image.create({
      data: {
        imageUrl: data.imageUrl,
        type: enumImageType.OFFER,
        ownerId: createdOffer.id,
        ownerType: enumRole.SUPPLIER,
      },
    });
  }

  await prisma.image.create({
    data: {
      imageUrl:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      type: enumImageType.PROFILE,
      ownerId: alexImker.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });

  await prisma.image.create({
    data: {
      imageUrl: 'Imkerei.jpeg',
      type: enumImageType.FACILITY,
      ownerId: alexImker.supplier.id,
      ownerType: enumRole.SUPPLIER,
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
          companyPhone: '123456789',
          companyBio: 'Ilgen special farm products',
          slug: 'manfred-hof',
          featured: true,
        },
      },
      address: {
        create: {
          streetAddress: 'Klaus Strasse',
          city: 'Munich',
          zip: '12345',
          state: 'Bavaria',
          country: 'Germany',
        },
      },
    },
    include: {
      supplier: true,
    },
  });

  const offerDataManfred = [
    {
      title: 'Cheese',
      imageUrl: 'cheese.jpeg',
    },
    {
      title: 'Milk',
      imageUrl: 'milk.jpeg',
    },
  ];

  for (const data of offerDataManfred) {
    const createdOffer = await prisma.offer.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: { name: 'dairy' },
            create: { name: 'dairy' },
          },
        },
        price: 1.99,
        unit: 'lb',
        amount: 100,
        supplier: {
          connect: {
            id: manfredHof.supplier.id,
          },
        },
      },
    });

    await prisma.image.create({
      data: {
        imageUrl: data.imageUrl,
        type: enumImageType.OFFER,
        ownerId: createdOffer.id,
        ownerType: enumRole.SUPPLIER,
      },
    });
  }

  await prisma.image.create({
    data: {
      imageUrl:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      type: enumImageType.PROFILE,
      ownerId: manfredHof.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });

  await prisma.image.create({
    data: {
      imageUrl: 'Farmhouse.jpeg',
      type: enumImageType.FACILITY,
      ownerId: manfredHof.supplier.id,
      ownerType: enumRole.SUPPLIER,
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
          companyPhone: '123456789',
          companyBio: 'Ilgen special farm products',
          slug: 'dominik-hunter',
        },
      },
      address: {
        create: {
          streetAddress: 'Klaus Strasse',
          city: 'Munich',
          zip: '12345',
          state: 'Bavaria',
          country: 'Germany',
        },
      },
    },
    include: {
      supplier: true,
    },
  });

  const offerDataDominik = [
    {
      title: 'pork',
      imageUrl: 'pork.jpeg',
    },
    {
      title: 'Beef',
      imageUrl: 'beef.jpeg',
    },
  ];

  for (const data of offerDataDominik) {
    const createdOffer = await prisma.offer.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: { name: 'meat' },
            create: { name: 'meat' },
          },
        },
        price: 1.99,
        unit: 'lb',
        amount: 100,
        supplier: {
          connect: {
            id: dominikHunter.supplier.id,
          },
        },
      },
    });

    await prisma.image.create({
      data: {
        imageUrl: data.imageUrl,
        type: enumImageType.OFFER,
        ownerId: createdOffer.id,
        ownerType: enumRole.SUPPLIER,
      },
    });
  }

  await prisma.image.create({
    data: {
      imageUrl:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      type: enumImageType.PROFILE,
      ownerId: dominikHunter.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });

  await prisma.image.create({
    data: {
      imageUrl: 'Jägerhütte.jpeg',
      type: enumImageType.FACILITY,
      ownerId: dominikHunter.supplier.id,
      ownerType: enumRole.SUPPLIER,
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
          companyPhone: '123456789',
          companyBio: "Bäckerei Maria's bread is the best in the world",
          slug: 'maria-baker',
        },
      },
      address: {
        create: {
          streetAddress: 'Klaus Strasse',
          city: 'Munich',
          zip: '12345',
          state: 'Bavaria',
          country: 'Germany',
        },
      },
    },
    include: {
      supplier: true,
    },
  });

  const offerDataMaria = [
    {
      title: 'Kürbiskernbrot',
      imageUrl: 'bread.jpeg',
    },
    {
      title: 'Buns',
      imageUrl: 'buns.jpeg',
    },
  ];

  for (const data of offerDataMaria) {
    const createdOffer = await prisma.offer.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: { name: 'grain' },
            create: { name: 'grain' },
          },
        },
        price: 1.99,
        unit: 'lb',
        amount: 100,
        supplier: {
          connect: {
            id: mariaBaker.supplier.id,
          },
        },
      },
    });

    await prisma.image.create({
      data: {
        imageUrl: data.imageUrl,
        type: enumImageType.OFFER,
        ownerId: createdOffer.id,
        ownerType: enumRole.SUPPLIER,
      },
    });
  }

  await prisma.image.create({
    data: {
      imageUrl:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      type: enumImageType.PROFILE,
      ownerId: mariaBaker.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });

  await prisma.image.create({
    data: {
      imageUrl: 'Bäckerei.jpeg',
      type: enumImageType.FACILITY,
      ownerId: mariaBaker.supplier.id,
      ownerType: enumRole.SUPPLIER,
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
          companyPhone: '123456789',
          companyBio: 'Fish from the Ammersee and the Starnberger See',
          slug: 'markus-fisher',
        },
      },
      address: {
        create: {
          streetAddress: 'Klaus Strasse',
          city: 'Munich',
          zip: '12345',
          state: 'Bavaria',
          country: 'Germany',
        },
      },
    },
    include: {
      supplier: true,
    },
  });

  const offerDataMarkus = [
    {
      title: 'Trout',
      imageUrl: 'trout.jpeg',
    },
    {
      title: 'Salmon',
      imageUrl: 'salmon.jpeg',
    },
  ];

  for (const data of offerDataMarkus) {
    const createdOffer = await prisma.offer.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: { name: 'fish' },
            create: { name: 'fish' },
          },
        },
        price: 1.99,
        unit: 'lb',
        amount: 100,
        supplier: {
          connect: {
            id: mariaBaker.supplier.id,
          },
        },
      },
    });

    await prisma.image.create({
      data: {
        imageUrl: data.imageUrl,
        type: enumImageType.OFFER,
        ownerId: createdOffer.id,
        ownerType: enumRole.SUPPLIER,
      },
    });
  }

  await prisma.image.create({
    data: {
      imageUrl:
        'https://www.ko.com/sites/default/files/2018-10/nestle_logo.png',
      type: enumImageType.PROFILE,
      ownerId: mariaBaker.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });

  await prisma.image.create({
    data: {
      imageUrl: 'Fischerei.jpeg',
      type: enumImageType.FACILITY,
      ownerId: mariaBaker.supplier.id,
      ownerType: enumRole.SUPPLIER,
    },
  });
}
