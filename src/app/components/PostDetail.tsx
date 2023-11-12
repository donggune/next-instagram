import { FullPost, SimplePost } from "@/model/post";
import React from "react";
import useSWR from "swr";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`); // dynamic route 를 사용하여 data를 가져옴
  const comments = data?.comments;

  console.log(comments);

  return <div>PostDetail</div>;
}
