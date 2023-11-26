import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

type Context = {
  params: { keyword: string };
};

export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
