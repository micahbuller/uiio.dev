'use client'

import { motion } from 'motion/react'
import { HorizontalProjectGallery } from './horizontal-project-gallery'

type MediaItem = {
  type: 'video' | 'image'
  src: string
  alt?: string
}

type Project = {
  name: string
  description: string
  link: string
  media: MediaItem[]
  id: string
}

type ProjectSectionProps = {
  project: Project
  className?: string
}

export function ProjectSection({ project, className = '' }: ProjectSectionProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Project title and description - aligned with page content */}
      <div className="space-y-2">
        <a
          className="font-heading group relative inline-block text-2xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
          <span className="absolute bottom-0 left-0 block h-[2px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-300 group-hover:max-w-full"></span>
        </a>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {project.description}
        </p>
      </div>
      
      {/* Horizontal media gallery - extends to browser edge */}
      <div className="-mx-8 lg:-mx-12">
        <HorizontalProjectGallery 
          media={project.media}
          className="mt-6"
        />
      </div>
    </div>
  )
}