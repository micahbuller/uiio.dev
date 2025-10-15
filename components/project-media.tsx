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
} from '@/components/ui/morphing-dialog'

type MediaItem = {
  type: 'video' | 'image'
  src: string
  alt?: string
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
  const dragThreshold = 5 // pixels
  const startPosition = useRef({ x: 0, y: 0 })

  // Reset loading state when media changes
  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
  }, [media.src])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(false) // Keep skeleton visible on error
  }

  const handleLoadingComplete = () => {
    // Next.js Image specific event - fires when image is fully loaded and decoded
    setIsLoaded(true)
    setHasError(false)
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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          className="cursor-pointer relative"
        >
          {/* Error state */}
          {hasError && (
            <div 
              className="flex items-center justify-center bg-zinc-800 rounded text-zinc-500 text-sm"
              style={{ 
                width: '100%',
                height: '200px',
                maxWidth: '400px'
              }}
            >
              Failed to load media
            </div>
          )}
          
          {media.type === 'video' ? (
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              onLoadStart={() => setIsLoaded(false)}
              onCanPlay={handleLoad}
              onError={handleError}
              className={`rounded object-contain ${
                isDragging || dragStarted ? 'cursor-grabbing' : 'cursor-zoom-in'
              } ${className}`}
              style={{ 
                width: '100%',
                height: 'auto',
                maxWidth: '400px',
                maxHeight: '600px'
              }}
              draggable={false}
            />
          ) : (
            <Image
              src={media.src}
              alt={media.alt || 'Project media'}
              width={400}
              height={600}
              onLoad={handleLoad}
              onLoadingComplete={handleLoadingComplete}
              onError={handleError}
              priority={true} // Load immediately, no lazy loading
              className={`rounded object-contain ${
                isDragging || dragStarted ? 'cursor-grabbing' : 'cursor-zoom-in'
              } ${className}`}
              style={{ 
                width: '100%',
                height: 'auto',
                maxWidth: '400px',
                maxHeight: '600px'
              }}
              draggable={false}
            />
          )}
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 max-w-5xl max-h-[85vh]">
          {media.type === 'video' ? (
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              className="w-full h-full rounded object-contain max-h-[80vh]"
            />
          ) : (
            <Image
              src={media.src}
              alt={media.alt || 'Project media'}
              width={1200}
              height={800}
              className="w-full h-full rounded object-contain max-h-[80vh]"
            />
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