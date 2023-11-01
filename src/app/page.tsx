import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import FollowingBar from './components/FollowingBar'
import PostList from './components/PostList'
import SideBar from './components/SideBar'
import { getServerSession } from "next-auth";

export default async function Home() {
  // 사용자 정보 가져오는 방법은 2가지임 (백엔드, 프론트) 에서 가져올수있음. 13.3 강의에 나옴

  // getServerSession는 서버에서 세션가져오는 방법임
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if(!user){
    redirect('/auth/signin');
  }

  return (
    <section className="flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  )
}
