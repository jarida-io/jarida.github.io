import React from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10 w-auto'
}) => {
  return (
    <img
      src="/images/jarida_logo.png"
      alt=""
      className={className}
    />
  )
}

export default Logo