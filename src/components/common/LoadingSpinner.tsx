import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  message?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  message = 'Loading...'
}) => {
  const containerSizes = {
    sm: 'p-8',
    md: 'p-16',
    lg: 'p-24'
  }

  return (
    <div className={`flex flex-col items-center justify-center min-h-[200px] ${containerSizes[size]}`}>
      {/* Logo without distortion */}
      <div className="mb-4">
        <Logo/>
      </div>
      
      {/* Loading dots */}
      <div className="flex space-x-2 mb-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              y: [-4, 4, -4],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut'
            }}
            className="w-2 h-2 rounded-full bg-jarida-purple"
          />
        ))}
      </div>
      
      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-quicksand text-color-text-primary/60 text-sm"
      >
        {message}
      </motion.p>
    </div>
  )
}

export default LoadingSpinner