import NextAuth from "next-auth";
import {
    PrismaAdapter
} from "@next-auth/prisma-adapter"
import {
    PrismaClient
} from "@prisma/client"

import CredentialsProvider from "next-auth/providers/credentials";
import LineProvider from "next-auth/providers/line";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions = {
    pages: {
        // signIn: "/",
        // signOut: "/",
        // error: "/", // Error code passed in query string as ?error=
        // verifyRequest: "/", // (used for check email message)
        // If set, new users will be directed here on first sign in
        newUser: '/dashboard',
    },
    providers: [
        // Credentials
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            secret: process.env.SECRET,
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    value: "admin@local.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                    value: "pw"
                }
            },
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                        // password: credentials.password
                    }
                });

                if (user !== null) {
                    userAccount = user;
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks: {
      signIn: async ({ user, account, profile }) => {
        console.log(user, account, profile, "try signin");

        try {
          const exitedUser = await prisma.user.findUnique({
            where: { email: user.email }
          });

          if (exitedUser) {
            console.log(exitedUser, "get user");
            return Promise.resolve(true);
          } else {
            const createdUser = await prisma.user.create({
              data: user
            });
            const createAccount = await prisma.accounts.create({
                data: account
              });
            console.log(createdUser, "created user!");
            return Promise.resolve(true);
          }
        } catch (e) {
          console.log(e);
          return Promise.reject(true);
        }
      }
    },
    database: process.env.NEXT_PUBLIC_DATABASE_URL,
    secret: process.env.JWT_SECRET,
    session: {
        jwt: true,
    },
    events: {
        // signIn: async (message) => {
        async signIn({
            user,
            account,
            profile,
            message
        }) {
            console.log("signIncxx", account);
        },
        signOut: async (message) => {
            console.log("signOut", message);
        },
        createUser: async (message) => {
            console.log("createUser", message);
        },
        updateUser: async (message) => {
            console.log("updateUser", message);
        },
        linkAccount: async (message) => {
            console.log("linkAccount", message);
        },
        session: async (message) => {
            // console.log('session', message);
        }
    },
    debug: true,
    theme: {
        colorScheme: "auto",
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
        brandColor: "#1786fb"
    }
};

export default NextAuth(authOptions);