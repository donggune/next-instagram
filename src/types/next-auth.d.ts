import NextAuth, {DefaultSession} from 'next-auth';

// 본 파일 설명 12.18 강의에서 설명나옴
declare module 'next-auth' {
  interface Session {
    user:{
      username: string;      
    } & DefaultSession['user'];
  }
}