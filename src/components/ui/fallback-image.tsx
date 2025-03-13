"use client"

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/utils/cn'

interface FallbackImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

export default function FallbackImage({
  src,
  fallbackSrc = '/images/placeholder.jpg',
  alt,
  className,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  const handleError = () => {
    if (!error) {
      setImgSrc(fallbackSrc)
      setError(true)
    }
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={cn(className, error ? 'bg-muted' : '')}
      onError={handleError}
    />
  )
} 