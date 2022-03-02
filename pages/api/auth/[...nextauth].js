import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import LineProvider from "next-auth/providers/line";
import { PrismaClient } from "@prisma/client";
let userAccount = null;

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    // Credentials
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
      secret: process.env.SECRET
    }),
    // LineProvider<any>(options: OAuthUserConfig<any>): OAuthConfig<any>)
    CredentialsProvider({
      name: "Credentials",
      secret: process.env.SECRET,
      credentials: {
        email: { label: "Email", type: "text", value: "admin@local.com" },
        password: { label: "Password", type: "password", value: "pw" }
      },
      // async authorize(credentials) {
      //   const user = await prisma.user.findFirst({
      //     where: {
      //       email: credentials.email,
      //       // email: 'admin@local.com',
      //       // password: "112233"
      //     }
      //   });
      //   // if (credentials.password === "pw") {
      //   if (user && credentials.password === "pw") {
      //     return user;
      //   }
      //   return null
      // },
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
  // callbacks: {
  //   signIn: async ({ user, account, profile }: any) => {
  //     console.log(user, account, profile, "try signin");

  //     try {
  //       const exitedUser = await prisma.user.findUnique({
  //         where: { email: user.email }
  //       });
  //       if (exitedUser) {
  //         console.log(exitedUser, "get user");
  //         return Promise.resolve(true);
  //       } else {
  //         console.log("create###", user.name, user.email);
  //         const createdUser = await prisma.user.create({
  //           data: {
  //             name: user.name,
  //             email: user.email
  //           }
  //         });
  //         console.log(createdUser, "created user!");
  //         return Promise.resolve(true);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       return Promise.reject(true);
  //     }
  //   }
  // },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken;
      }
      return session;
    }
  },
  events: {
    signIn: async (message) => {
      console.log("signIn", message);
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

