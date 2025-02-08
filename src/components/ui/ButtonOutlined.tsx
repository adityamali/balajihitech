'use client'
import React from 'react'

const ButtonOutlined: React.FC<{ text: string; onClick: React.MouseEventHandler<HTMLButtonElement> }> = ({ text, onClick }) => {
  return (
  <button className='bg-transparent border-2 border-black text-black py-2 px-4 rounded-md' onClick={onClick}>
    {text}
  </button>
  )
}

export default ButtonOutlined;