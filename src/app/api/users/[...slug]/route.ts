import { getLikedPostsOf, getPostsOf, getSavedPostsOf } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    slug: string[];
  };
};
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;

  let request = getPostsOf;
  console.log(`[api/user/route : query] ${query}`);
  console.log(`[api/user/route : username] ${username}`);
  if (query === "saved") {
    request = getSavedPostsOf;
    console.log(`[getPost saved]`);
    console.log(`${username}`);
    console.log(`${request}`);
  } else if (query === "liked") {
    request = getLikedPostsOf;
    console.log(`[getPost liked]`);
    console.log(`${username}`);
    console.log(`${request}`);
  }

  return request(username).then((data) => {
    console.log(`[data]`);
    console.log(data);
    return NextResponse.json(data);
  });
}
