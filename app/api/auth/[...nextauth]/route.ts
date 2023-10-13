import { logger } from '@/lib/logger';
// import { UserClass } from "@/types/user";
import { userWebAuth, putUser, postUser, getWebUserByEmail, userOnboard } from "@/services/user";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user) {
        return false;
      }

      switch (account?.provider) {

        case "credentials":
          logger.debug(`👉signIn:callback:credentials: ${user.email}`);
          break;

        case "github":
          logger.debug(`👉signIn:callback:github: ${user.email}`);
          // if (user?.email) {
          //   var systemUser = await getWebUserByEmail(user?.email);
          //   if (systemUser) {
          //     systemUser.Provider = 'github';
          //     systemUser.PortalRole = 'web'
          //     systemUser.GitHub = account?.html_url as string;
          //     systemUser.FullPhotoURL = account?.avatar_url as string;
          //     systemUser.SmallPhotoURL = account?.avatar_url as string;
          //     systemUser.IsActive = true;
          //     systemUser.Twitter = account?.twitter_username as string;
          //     systemUser.CompanyName = account?.company as string;
          //     systemUser.LastLogin = new Date();
          //     if (!systemUser.LoginCount) {
          //       systemUser.LoginCount = 0;
          //     }
          //     systemUser.LoginCount = systemUser.LoginCount + 1;
          //     const updatedUser = await putUser(systemUser);
          //     if (!updatedUser) {
          //       logger.debug(`❌ signIn:callback:github: error updating user`);
          //     } else {
          //       logger.debug(`➡️ signIn:callback:github: 👍 user updated`);
          //     }
          //   } else {
          //     logger.debug(`➡️ signIn:callback:github: user not found`);
          //     systemUser = new UserClass({
          //       Provider: 'github',
          //       PortalRole: 'web',
          //       Email: user?.email,
          //       GitHub: account?.html_url as string,
          //       FullPhotoURL: account?.avatar_url as string,
          //       SmallPhotoURL: account?.avatar_url as string,
          //       IsActive: true,
          //       LastLogin: new Date(),
          //       Twitter: account?.twitter_username as string,
          //       CompanyName: account?.company as string,
          //       LoginCount: 1,
          //       LoginDate: new Date(),
          //     });
          //     const newUser = await userOnboard(systemUser);
          //     if (!newUser) {
          //       logger.debug(`❌ signIn:callback:github: error creating user`);
          //     } else {
          //       logger.debug(`➡️ signIn:callback:github: 👍 user created`);
          //     }
          //   }
          // }
          break;

        case "google":
          logger.debug(`👉signIn:callback:google: ${user.email}`);
          break;

        default:
          logger.debug(`👉signIn:callback:default: Unknown provider ${account?.provider}`);
          break;
      }
      logger.debug(`👈signIn:callback: ${user.email}`);
      return true;
    },
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
