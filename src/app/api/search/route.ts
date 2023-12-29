import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
// 강의 13.36
// 아래 GET 함수 처럼, 별도로 request 를 받지 않고, 그것을 기반으로 무언가를 하지 않는 소스는
// server 컴포넌트라도 SSG로 동작함
// SSR 로 동작시키기 위해서는 dynamic 설정을 해줘야함

export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
