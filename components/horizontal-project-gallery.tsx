'use client'

import { useRef, useState, useEffect } from 'react'
import { ProjectMedia } from './project-media'

type MediaItem = {
  type: 'video' | 'image'
  src: string
  alt?: string
}

type HorizontalProjectGalleryProps = {
  media: MediaItem[]
  className?: string
}

export function HorizontalProjectGallery({ 
  media, 
  className = '' 
}: HorizontalProjectGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
    
    // Prevent text selection during drag
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    const newScrollLeft = scrollLeft - walk
    
    // Calculate scroll boundaries
    const container = scrollContainerRef.current
    const maxScrollLeft = container.scrollWidth - container.clientWidth
    
    // Constrain scroll within boundaries
    const constrainedScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft))
    container.scrollLeft = constrainedScrollLeft
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Global mouse up handler to catch mouse up outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging])

  return (
    <div className={`${className}`}>
      {/* Horizontal scrolling container */}
      <div 
        ref={scrollContainerRef}
        className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide drag-scroll pl-8 lg:pl-12 pr-8 lg:pr-12 items-start ${
          isDragging ? 'dragging cursor-grabbing no-select' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {media.map((item, index) => (
          <div 
            key={index} 
            className="flex-none"
            style={{ 
              width: 'auto',
              maxWidth: '400px'
            }}
          >
            <div className="relative">
              <ProjectMedia 
                media={item}
                className=""
                isDragging={isDragging}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}