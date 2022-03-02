import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()
let userAccount = null;

const prisma = new PrismaClient();

interface Token {
  accessToken: string;
  accessTokenExpires: number;
  refreshToken: string;
  product: string;
  error: string;
}
interface CredentialsType {
  email:any
}
interface User {}
interface Profile {
  product: string;
}

interface Account {
  accessToken: string;
  expires_in: number;
  refresh_token: string;
}

interface Session {
  user: User;
}



export const authOptions: NextAuthOptions = {
  // adapter,
  providers: [
    // Credentials
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" ,value:"admin@local.com"},
        password: { label: "Password", type: "password",value:"pw" },
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
      async authorize(credentials:any) {
        const user = await prisma.user.findFirst({
            where: {
                email: credentials.email,
               // password: credentials.password
            }
        });

        if (user !== null)
        {
            userAccount = user;
            return user;
        }
        else {
            return null;
        }
    }

    }),
   
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
  debug: true,
  theme: {
    colorScheme: "auto",
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    brandColor: "#1786fb",
  },
}

export default NextAuth(authOptions)
