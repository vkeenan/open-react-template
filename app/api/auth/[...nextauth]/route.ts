import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { userWebAuth } from "@/services/user/auth";

export const authOptions: AuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user = token;
      return session;
    },
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const user = await userWebAuth(credentials.email, credentials.password);
        console.log(user);
        if (user) {
          return user;
        }
        return null;
      },
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  theme: {
    logo: '/images/workdiff-logo-horiz.png',
    colorScheme: "dark",
    brandColor: "#a68769",
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
