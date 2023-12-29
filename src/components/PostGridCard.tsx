import { SimplePost } from "@/model/post";
import Image from "next/image";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function PostGridCard({ post, priority = false }: Props) {
  const { image, username } = post;
  const [openModal, setOpenModal] = useState(false); // 기본적으로 modal이 보여지지 않도록 false 설정
  const { data: session } = useSession();
  const handleOpenPost = () => {
    if (!session?.user) {
      // 클라이언트 컴포넌트이니 redirect 사용 할 수 없다.
      // useRoute 사용 할 수 있다. 여기서는 Next-auth에서 제공해주는 signIn() 으로 이동한다
      return signIn();
    }

    setOpenModal(true);
  };

  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
