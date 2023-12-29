import NewPost from "@/components/NewPost";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "New Post",
  description: "Create a new post",
};

export default async function NewPostPage() {
  /**
   * 세션을 받아 올 때는 authOptions를 꼭 전달 해줘야함.
   * authOptions 를 사용해야 Nextauth 에서 등록한 콜백 사용할 수있고
   * 그래야 session이 호출되고 그럼 14.27 7:10에 나옴  */

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return <NewPost user={session.user} />;
}
