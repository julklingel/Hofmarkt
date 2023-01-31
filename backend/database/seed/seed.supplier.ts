import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
export async function seedSupplier() {
  const hash = await argon2.hash('123');

  const nestle = await prisma.supplier.upsert({
    where: { companyEmail: 'neste@info.com' },
    update: {},
    create: {
      companyName: 'Nestle',
      companyLogo:
        'https://www.nestle.com/sites/g/files/auxxlc196/files/2020-06/Logo_Nestle_White_RGB.png',
      companyEmail: 'neste@info.com',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      offer: {
        create: [
          {
            title: 'apple',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'banana',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'orange',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'grape',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'strawberry',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'watermelon',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'pineapple',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'mango',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'kiwi',
            category: 'fruit',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'tomato',
            category: 'vegetable',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'potato',
            category: 'vegetable',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
        ],
      },
    },
  });

  const manfredsHif = await prisma.supplier.upsert({
    where: { companyEmail: 'manHof@info.com' },
    update: {},
    create: {
      companyName: 'manHof',
      companyLogo:
        'logo_manHof.png',
      companyEmail: 'manHof@info.com',
      companyPhone: 123456789,
      companyAddress: '1234 Main St',
      offer: {
        create: [
          {
            title: 'milk',
            category: 'dairy',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 0.99,
            unit: 'l',
            amount: 10,
          },
          {
            title: 'cheese',
            category: 'dairy',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'yogurt',
            category: 'dairy',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'butter',
            category: 'dairy',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
          {
            title: 'cream',
            category: 'dairy',
            img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            price: 1.99,
            unit: 'kg',
            amount: 10,
          },
        
        ]
      }
    },
  });

}

