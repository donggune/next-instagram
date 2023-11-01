'use client';

import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
}

// 드림 코딩 강의 12.15 에 컨텍스트에 대해서 이야기함, 컨텍스트는 리엑트 문법,개념임
export default function SWRConfigContext({children}: Props){
  return <SWRConfig
    value={{
      fetcher: (url:string) => fetch(url).then((res) => res.json())
    }}
  >{children}</SWRConfig>
}