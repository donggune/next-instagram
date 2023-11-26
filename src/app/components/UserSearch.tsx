"use client";

import { ProfileUser } from "@/model/user";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 엘리 강의 13.25 -> 3:10 남음부분
    // submit 처리를 해주지 않은 이유
    // keyword를 useState가 관리하고 있기 때문에 keyword 상태가 변경될꺼고
    // keyword 상태가 변경 될 때마다 useSWR이 알아서 네트워크 요청을 해서 데이터 가져오기 때문임
    // 데이터를 받아오면 useSWR의 data 가 업데이트 될꺼임
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못 되었음</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <p>{user.username}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
