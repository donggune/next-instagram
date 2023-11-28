import { AuthUser } from "@/model/user";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  user: AuthUser;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        소개. 마케팅. 광고. 유저. 등등. 이빨
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright INSTANGRAM from METAL
      </p>
    </>
  );
}
