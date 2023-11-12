'use client'

import { SimplePost } from '@/model/post'
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';

type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostListCard({post, priority = false}: Props) {
  
  const {userImage, username, image, createdAt, likes, text} = post;
  const [openModal, setOpenModal] = useState(false); // 기본적으로 modal이 보여지지 않도록 false 설정
  
  return <article className='rounded-lg shadow-md border border-gray-200'>
      <div className='flex items-center'>
        <Avatar image={username} />
        <span className='text-gray font-bold ml-2'>@{username}</span>
      </div>
      <Image className='w-full object-cover aspect-square'
        src={image} alt={`photo by ${username}`} width={500} height={500} priority={priority} onClick={()=> setOpenModal(true)}/>
      <ActionBar likes={likes} username={username} text={text} createdAt={createdAt} />
      <CommentForm />
      {
        openModal && <ModalPortal>
          <PostModal onClose={()=>setOpenModal(false)}><p>포스트 상세 페이지!!</p></PostModal>
        </ModalPortal>
      }
    </article>
  
}
