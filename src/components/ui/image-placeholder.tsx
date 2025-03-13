'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  width?: number
  height?: number
  text?: string
  className?: string
  bgColor?: string
  textColor?: string
}

export default function ImagePlaceholder({
  width = 800,
  height = 600,
  text = 'Image Not Found',
  className,
  bgColor = '#f5f5f5',
  textColor = '#666666'
}: ImagePlaceholderProps) {
  return (
    <div 
      className={cn(
        'flex items-center justify-center overflow-hidden',
        className
      )}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={width} height={height} fill={bgColor} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={textColor}
          fontSize="24"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
        >
          {text}
        </text>
        <path
          d="M160 120v-20c0-6.627 5.373-12 12-12h20c6.627 0 12 5.373 12 12v20c0 6.627-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12zm100 0v-20c0-6.627 5.373-12 12-12h20c6.627 0 12 5.373 12 12v20c0 6.627-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12zm-100 100v-20c0-6.627 5.373-12 12-12h20c6.627 0 12 5.373 12 12v20c0 6.627-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12zm100 0v-20c0-6.627 5.373-12 12-12h20c6.627 0 12 5.373 12 12v20c0 6.627-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12z"
          fill={textColor}
          fillOpacity="0.1"
          transform={`scale(${width / 400}) translate(50, 50)`}
        />
      </svg>
    </div>
  )
} 