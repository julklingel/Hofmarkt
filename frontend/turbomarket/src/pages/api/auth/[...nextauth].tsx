import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",

        credentials: {
          email: { email: true, label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },

        async authorize(credentials) {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          const res = await fetch("http://localhost:4444/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const user = await res.json();

          if (!res.ok) {
            throw new Error(user.message || "Something went wrong!");
          }
          return user;
        },
      }),
    ],

    session: {
      maxAge: 24 * 60 * 60, // 24 hours
    },

    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.accessToken = user.access_token;
        }

        return token;
      },

      async session({ session, token }) {
        session.accessToken = token.accessToken;

        return session;
      },
    },

    pages: {
      signIn: "/auth/login",
    },
  });
}
