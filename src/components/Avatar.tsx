import React from "react";

type AvatarSize = "small" | "midium" | "large";

type Props = {
  image?: string | null;
  size?: AvatarSize;
  hightlight?: boolean;
};

export default function Avatar({
  image,
  size: normal,
  hightlight: boolean,
}: Props) {
  return (
    <p>
      <span className="font-bold mr-2">
        (A)
        {image}
      </span>
    </p>
  );
  // 그냥 글자말고 Image 사용하려면 강의 12.18 에 나옴
}
