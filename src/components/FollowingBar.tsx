"use client";

import { HomeUser } from "@/model/user";
import Link from "next/link";
import { DotLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴
  // 4. 여기(클라이언트컴포넌트)에서 사용자의 정보를 UI에 보여줌
  //

  const { data, isLoading: loading, error } = useSWR<HomeUser>("/api/me");
  const users = data?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <DotLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center"
              href={`/user/${username}`}
            >
              <Avatar image={username} />
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
