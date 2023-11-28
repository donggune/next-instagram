import React from 'react'

type Props = {
  text: string,
  onClick: () => void;
  size?: 'small' | 'big' | null; // size 앞에 ? 를 해주면 Props 에 size 안넣어도 타입에러 나지 않음
}

export default function ColorButton({text, onClick, size='small'}: Props) {
  return (
    <div className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]
      ${size === 'big' ? ' p-[0.3rem]' : 'p-[0.15rem]'}`}>
      <button 
        className={`bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity
        ${size === 'big' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'}`} 
        onClick={onClick}>
          {text}
      </button>
    </div>
  );
}
