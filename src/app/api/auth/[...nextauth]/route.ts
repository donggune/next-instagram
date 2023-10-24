import NextAuth from "next-auth"
import KakaoProvider from "next-auth/providers/kakao";

const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || ''
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }