import React from "react";
import Avatar from "./Avatar";

type Props = {
  image: string;
  username: string;
};

export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className="flex items-center">
      <Avatar image={username} />
      <span className="text-gray font-bold ml-2">@{username}</span>
    </div>
  );
}
