import { NextResponse } from "next/server";
import { getUserByUsername } from "@/service/user";
import { withSessionUser } from "@/util/session";

export async function GET() {
  return withSessionUser(async (user) =>
    getUserByUsername(user.name).then((data) => NextResponse.json(data))
  );
}
