'use client';

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
}

// 드림 코딩 강의 12.15 에 컨텍스트에 대해서 이야기함, 컨텍스트는 리엑트 문법,개념임
export default function AuthContext({children}: Props){
  return <SessionProvider>{children}</SessionProvider>
}