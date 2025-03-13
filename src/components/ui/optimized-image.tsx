'use client'

import React from 'react'
import FallbackImage from './fallback-image'
import { cn } from '@/utils/cn'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
  sizes?: string
  className?: string
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'wide'
  fill?: boolean
  fallbackSrc?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'sync' | 'auto'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 85,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className,
  aspectRatio = 'auto',
  fill = false,
  fallbackSrc,
  loading = 'lazy',
  fetchPriority = 'auto',
  decoding = 'async',
  ...props
}: OptimizedImageProps) {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
  }

  // Determine if this is a hero/above-the-fold image that should be prioritized
  const shouldPrioritize = priority || fetchPriority === 'high'

  return (
    <div 
      className={cn(
        'overflow-hidden',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <FallbackImage
        src={src}
        alt={alt || 'Image'}
        width={width}
        height={height}
        quality={quality}
        priority={shouldPrioritize}
        sizes={sizes}
        fill={fill}
        fallbackSrc={fallbackSrc}
        className={cn('h-full w-full', aspectRatio !== 'auto' && 'object-cover')}
        loading={shouldPrioritize ? 'eager' : loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        {...props}
      />
    </div>
  )
} 