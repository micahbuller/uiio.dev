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

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Jesus In Healthcare',
    description:
      'Recruiting Christian healthcare professionals to serve in hospitals and clinics across the globe.',
    link: 'https://pro.motion-primitives.com/',
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1715284496/blog/jesusinhealthcare/h4lx5perd7foxmjcjag3.mp4',
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1715283435/blog/jesusinhealthcare/thge9bks39icwygsntyg.jpg',
        alt: 'Jeusus In Healthcare homepage design on a laptop purched on a rock.'
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1715284496/blog/jesusinhealthcare/m81aiouhifbusqedsm28.mp4',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1715282657/blog/jesusinhealthcare/tekhsb4qtcpoavecj96w.mp4',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1715284496/blog/jesusinhealthcare/jq29zpqez54zlf1zv4lc.mp4',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1715282657/blog/jesusinhealthcare/odiohfu0r5bfentluti9.mp4',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1715282657/blog/jesusinhealthcare/sadk6tqu7t7j2sqojiu1.mp4',
      },
    ],
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'A comprehensive UI kit featuring beautiful animations and interactive components for modern web development.',
    link: 'https://motion-primitives.com/',
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=700&h=500&fit=crop&crop=center',
        alt: 'Design system components'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop&crop=center',
        alt: 'Creative workspace setup'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=center',
        alt: 'User interface mockups'
      },
      {
        type: 'video',
        src: 'https://player.vimeo.com/external/348448849.sd.mp4?s=a54c1e82d5a02e4c6e7cea7a59ca1ba32cf5e59c&profile_id=139&oauth2_token_id=57447761',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center',
        alt: 'Component library showcase'
      }
    ],
    id: 'project2',
  },
  {
    name: 'Brand Identity System',
    description: 'A complete brand identity and visual system featuring modern typography, color palettes, and design guidelines.',
    link: '#',
    media: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=500&fit=crop&crop=center',
        alt: 'Brand identity materials'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=800&fit=crop&crop=center',
        alt: 'Logo design variations'
      },
      {
        type: 'video',
        src: 'https://player.vimeo.com/external/317550081.sd.mp4?s=a54c1e82d5a02e4c6e7cea7a59ca1ba32cf5e59c&profile_id=139&oauth2_token_id=57447761',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop&crop=center',
        alt: 'Brand color palette'
      }
    ],
    id: 'project3',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/micahbuller',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/officialbuller',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/micah-buller-879062126/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/swisp',
  },
]

export const EMAIL = 'hello@uiio.dev'
