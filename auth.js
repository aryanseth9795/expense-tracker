// src/app/auth.ts

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import dbConnect from "@/lib/db";
import User from "@/models/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // On first sign-in
      if (account && profile.email) {
        await dbConnect();
        let dbUser = await User.findOne({ email: profile?.email });

        if (!dbUser) {
          dbUser = await User.create({
            name: profile.name,
            email: profile.email,
            image: profile?.image,
          });
        }
        token.id = dbUser._id.toString(); 
      }
      return token;
    },

    async session({ session, token }) {
      return {
        user: {
          id: token.id,
        },
      };
    },
  },
});
