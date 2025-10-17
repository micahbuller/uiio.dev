'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogImage,
} from '@/components/ui/morphing-dialog'

type MediaItem = {
  type: 'video' | 'image' | 'animated'
  src: string
  alt?: string
  animatedSrc?: string
  width?: number
  height?: number
}

type ProjectMediaProps = {
  media: MediaItem
  className?: string
  isDragging?: boolean
}

export function ProjectMedia({ media, className = '', isDragging = false }: ProjectMediaProps) {
  const [dragStarted, setDragStarted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const dragThreshold = 5 // pixels
  const startPosition = useRef({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStarted(false)
    startPosition.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!startPosition.current) return
    
    const deltaX = Math.abs(e.clientX - startPosition.current.x)
    const deltaY = Math.abs(e.clientY - startPosition.current.y)
    
    if (deltaX > dragThreshold || deltaY > dragThreshold) {
      setDragStarted(true)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    if (dragStarted || isDragging) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    
    // Enable video autoplay after user interaction
    if (media.type === 'video' && videoRef.current && !hasInteracted) {
      setHasInteracted(true)
      videoRef.current.play().catch(() => {
        // Autoplay failed, which is normal
      })
    }
  }

  // Intersection Observer for video autoplay when visible
  useEffect(() => {
    if (media.type !== 'video' || !containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
          
          if (videoRef.current) {
            if (entry.isIntersecting && hasInteracted) {
              videoRef.current.play().catch(() => {
                // Autoplay failed
              })
            } else if (!entry.isIntersecting) {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [media.type, hasInteracted])

  // Try to autoplay when video becomes visible (works on desktop)
  useEffect(() => {
    if (media.type === 'video' && videoRef.current && isVisible) {
      const video = videoRef.current
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, will need user interaction
        })
      }
    }
  }, [isVisible, media.type])

  // Get optimized Cloudinary URL
  const getOptimizedSrc = (src: string, isHighQuality = false) => {
    if (!src.includes('cloudinary.com')) return src
    
    const baseUrl = src.replace(/\/upload\/[^\/]+\//, '/upload/')
    
    if (isHighQuality) {
      return baseUrl.replace('/upload/', '/upload/q_auto:good,w_1000,f_auto/')
    } else {
      return baseUrl.replace('/upload/', '/upload/q_auto:eco,w_600,f_auto/')
    }
  }

  // Get video-specific optimized URL
  const getOptimizedVideoSrc = (src: string) => {
    if (!src.includes('cloudinary.com')) return src
    
    const baseUrl = src.replace(/\/upload\/[^\/]+\//, '/upload/')
    return baseUrl.replace('/upload/', '/upload/q_auto:good,w_800,br_600k,f_auto/')
  }

  // Calculate dimensions and aspect ratio
  const getDimensions = () => {
    if (media.width && media.height) {
      return {
        width: media.width,
        height: media.height,
        aspectRatio: media.width / media.height
      }
    }
    
    // Default aspect ratios
    const defaultAspectRatio = media.type === 'video' ? 16/9 : 4/3
    const defaultWidth = 800
    return {
      width: defaultWidth,
      height: Math.round(defaultWidth / defaultAspectRatio),
      aspectRatio: defaultAspectRatio
    }
  }

  const dimensions = getDimensions()

  const renderMedia = () => {
    if (media.type === 'video') {
      return (
        <video
          ref={videoRef}
          src={getOptimizedVideoSrc(media.src)}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          style={{ backgroundColor: '#e5e5e5' }}
        />
      )
    }

    return (
      <Image
        src={getOptimizedSrc(media.src)}
        alt={media.alt || ''}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full object-cover"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        sizes="(max-width: 768px) 100vw, 436px"
        unoptimized={false}
      />
    )
  }

  const renderDialogMedia = () => {
    if (media.type === 'video') {
      return (
        <video
          src={getOptimizedVideoSrc(media.src)}
          className="w-full h-auto object-contain max-h-[80vh]"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      )
    }

    return (
      <MorphingDialogImage
        src={getOptimizedSrc(media.src, true)}
        alt={media.alt || ''}
        className="w-full h-auto object-contain max-h-[80vh]"
      />
    )
  }

    return (
      <MorphingDialog>
      <MorphingDialogTrigger>
        <div
          ref={containerRef}
          className={`group cursor-pointer select-none ${className}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          style={{
            width: `min(436px, 70vw)`,
            aspectRatio: dimensions.aspectRatio
          }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            {renderMedia()}
            {/* Play button overlay for videos on mobile */}
            {media.type === 'video' && !hasInteracted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 md:hidden">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 rounded-2xl min-h-[60vh] min-w-[60vw] max-w-5xl max-h-[85vh] flex items-center justify-center">
          <MorphingDialogClose className="absolute top-4 right-4 z-50">
            <XIcon size={24} className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" />
          </MorphingDialogClose>
          {renderDialogMedia()}
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}