import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    onClick: () => void,
    
}


export default function Button({children, className, onClick}:Props) {
  return (
      <button className={`${className}`} onClick={onClick}>
          {children}
   </button>
  )
}
