import { addUser } from "@/service/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!name) {
        return false;
      }

      addUser({
        id,
        name: name || "",
        image,
        email: email || name,
        username: name || "",
      });

      return true;
    },
    async session({ session }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          name: user.name === "김동건" ? "donggeon" : user.name,
          username: user.name === "김동건" ? "donggeon" : user.name || "",
        };
      }

      console.log("[session]");
      console.log(session);

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
