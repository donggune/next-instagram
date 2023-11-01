import React from 'react'

type Props = {image?:string | null}

export default function Avatar({image}: Props) {
  return <p>{image}</p>
  // 그냥 글자말고 Image 사용하려면 강의 12.18 에 나옴
}
