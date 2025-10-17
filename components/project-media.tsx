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
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [naturalDimensions, setNaturalDimensions] = useState<{ width: number; height: number } | null>(null)
  const dragThreshold = 5 // pixels
  const startPosition = useRef({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Preload media to get natural dimensions
  useEffect(() => {
    const preloadMedia = async () => {
      if (media.type === 'image' || media.type === 'animated') {
        const img = document.createElement('img')
        img.onload = () => {
          setNaturalDimensions({ width: img.naturalWidth, height: img.naturalHeight })
        }
        img.onerror = () => {
          console.error('Failed to preload image:', media.src)
        }
        img.src = getOptimizedVideoSrc(media.src, false) // Use optimized source
      } else if (media.type === 'video') {
        const video = document.createElement('video')
        video.onloadedmetadata = () => {
          setNaturalDimensions({ width: video.videoWidth, height: video.videoHeight })
        }
        video.onerror = () => {
          console.error('Failed to preload video:', media.src)
        }
        video.src = getOptimizedVideoSrc(media.src, false)
        video.preload = 'metadata'
      }
    }

    preloadMedia()
  }, [media.src, media.type])

  // Extract aspect ratio from media or set default
  const getAspectRatio = () => {
    // First try natural dimensions from preloaded media
    if (naturalDimensions) {
      const ratio = naturalDimensions.width / naturalDimensions.height
      return ratio.toFixed(3)
    }
    
    // Fallback to explicit dimensions from data
    if (media.width && media.height) {
      const ratio = media.width / media.height
      return ratio.toFixed(3)
    }
    
    // Final fallbacks based on type
    if (media.type === 'video') {
      return '1.778' // 16:9 = 1.778
    }
    
    if (media.type === 'image' || media.type === 'animated') {
      return '1.333' // 4:3 = 1.333
    }
    
    return '1.778' // fallback
  }

  // Progressive video loading - start with low quality, upgrade when visible
  const getOptimizedVideoSrc = (src: string, isHighQuality = false) => {
    if (!src.includes('cloudinary.com')) return src
    
    // Extract the base URL without existing transformations
    const baseUrl = src.replace(/\/upload\/[^\/]+\//, '/upload/')
    
    if (isHighQuality && isVisible) {
      // High quality for visible videos
      return baseUrl.replace('/upload/', '/upload/q_auto:good,w_1000,br_800k,f_auto/')
    } else {
      // Medium quality for gallery - better balance
      return baseUrl.replace('/upload/', '/upload/q_auto:good,w_600,br_400k,f_auto/')
    }
  }
  useEffect(() => {
    if (media.type !== 'video' || !containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {
                // Autoplay failed, which is normal in some cases
              })
            } else {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.5 } // Play when 50% visible
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [media.type])

  // Reset loading state when media changes
  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
    setShowPlaceholder(true)
  }, [media.src])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
    setShowPlaceholder(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(false)
    setShowPlaceholder(false)
  }

  const handleLoadingComplete = () => {
    // Next.js Image specific event - fires when image is fully loaded and decoded
    setIsLoaded(true)
    setHasError(false)
    // Delay hiding placeholder for smooth transition
    setTimeout(() => {
      setShowPlaceholder(false)
    }, 150)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    startPosition.current = { x: e.clientX, y: e.clientY }
    setDragStarted(false)
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
    // If drag was detected or parent is dragging, prevent modal opening
    if (dragStarted || isDragging) {
      e.preventDefault()
      e.stopPropagation()
      return false
    }
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          className="cursor-pointer relative w-full h-full"
        >
          {/* Upcoming Studio Style Placeholder - matches exact size */}
          {showPlaceholder && !isLoaded && (
            <div 
              className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 transition-opacity duration-300 ease-out z-10 rounded-lg"
              style={{
                aspectRatio: getAspectRatio(),
              }}
            />
          )}

          {/* Error state */}
          {hasError && (
            <div 
              className="flex items-center justify-center bg-zinc-800 rounded-lg text-zinc-500 text-sm"
              style={{ 
                width: '100%',
                height: '200px'
              }}
            >
              Failed to load media
            </div>
          )}
          
          {/* Media Content */}
          {media.type === 'video' ? (
            <video
              ref={videoRef}
              src={getOptimizedVideoSrc(media.src, false)}
              loop
              muted
              playsInline
              webkit-playsinline="true"
              preload="none"
              poster={`${media.src.replace(/\.(mp4|webm|mov)$/, '.jpg')}`}
              onLoadStart={() => setIsLoaded(false)}
              onCanPlay={handleLoad}
              onLoadedData={handleLoad}
              onError={handleError}
              className={`w-full h-auto object-cover rounded-lg transition-opacity duration-500 ease-out ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } ${
                isDragging || dragStarted ? 'cursor-grabbing' : 'cursor-zoom-in'
              } ${className}`}
              draggable={false}
            />
          ) : media.type === 'image' || media.type === 'animated' ? (
            <Image
              src={media.src}
              alt={media.alt || 'Project media'}
              width={media.width || 800}
              height={media.height || 600}
              onLoad={handleLoad}
              onError={handleError}
              className={`w-full h-auto rounded-lg transition-opacity duration-500 ease-out object-cover ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } ${
                isDragging || dragStarted ? 'cursor-grabbing' : 'cursor-zoom-in'
              } ${className}`}
              draggable={false}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          ) : (
            <div className="flex items-center justify-center bg-zinc-800 rounded-lg text-zinc-500 text-sm h-48">
              Unsupported media type: {media.type}
            </div>
          )}
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 rounded-2xl min-h-[60vh] min-w-[60vw] max-w-5xl max-h-[85vh] flex items-center justify-center">
          {/* Same content as trigger but WITHOUT loading states/placeholders */}
          {media.type === 'video' ? (
            <video
              src={getOptimizedVideoSrc(media.src, true)}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              preload="auto"
              className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
              style={{ opacity: 1 }}
            />
          ) : media.type === 'image' || media.type === 'animated' ? (
            <img
              src={media.animatedSrc || media.src}
              alt={media.alt || 'Project media'}
              className="w-full h-auto max-h-[80vh] rounded-lg object-contain opacity-100"
              style={{ opacity: 1 }}
              draggable={false}
            />
          ) : (
            <div className="flex items-center justify-center bg-zinc-800 rounded-lg text-zinc-500 text-sm h-48">
              Unsupported media type: {media.type}
            </div>
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-2 shadow-lg dark:bg-zinc-800"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}