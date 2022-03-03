import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

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
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
      scope: "profile openid email",
      openId: true,
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile?.name,
          email: profile?.email,
          image: profile.picture
        };
      }
    }),
    CredentialsProvider({
      name: "Credentials",
      secret: process.env.SECRET,
      credentials: {
        email: { label: "Email", type: "text", value: "admin@local.com" },
        password: { label: "Password", type: "password", value: "pw" }
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
    // async jwt({ token, user, account }) {
    //   if (account && user) {
    //     return {
    //       ...token,
    //       accessToken: user.data.token,
    //       refreshToken: user.data.refreshToken,
    //     };
    //   }

    //   return token;
    // },

    // async session({ session, token }) {
    //   session.user.accessToken = token.accessToken;
    //   session.user.refreshToken = token.refreshToken;
    //   session.user.accessTokenExpires = token.accessTokenExpires;

    //   return session;
    // },

  },
  secret: process.env.JWT_SECRET,
  events: {
    // signIn: async (message) => {
    async signIn({ user, account, profile, message }) {
      if (account.provider === "google") {
        // try {
        const exitedUser = await prisma.user.findUnique({
          where: { email: user.email }
        });
        if (exitedUser) {
      
          console.log("exit userxxx")
          //   console.log(exitedUser, "get user");
            return Promise.resolve(true);
        } else {
          // console.log("create###", user.name, user.email);
           await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image,
              firstName: user.name,
              lastname: user.name,
              password: '',
              isActive: '1'
          }

          });
      
          console.log("user IS ",createdUser);
          if(createdUser){


        }
          // console.log(createdUser, "created user!");
          // return Promise.resolve(true);
          // console.log("Sign user Create", user);
        }
        // } catch (e) {
        //   console.log(e);
        //   return Promise.reject(true);
        // }


        return profile.email_verified && profile.email.endsWith("@example.com")
      }
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
