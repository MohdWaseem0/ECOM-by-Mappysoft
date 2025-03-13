'use client'

import React from 'react'
import OptimizedImage from '@/components/ui/optimized-image'
import { cn } from '@/utils/cn'

interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export default function BlogImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
  className,
}: BlogImageProps) {
  return (
    <figure className={cn('my-8 w-full', className)}>
      <div className="overflow-hidden rounded-lg">
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full"
          aspectRatio="wide"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
} 