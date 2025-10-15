type MediaItem = {
  type: 'video' | 'image' | 'animated'
  src: string
  alt?: string
  // For animated images converted from video
  animatedSrc?: string
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
    link: 'https://jesusinhealthcare.com',
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/q_auto:low,w_600,br_300k/v1715284496/blog/jesusinhealthcare/h4lx5perd7foxmjcjag3.mp4',
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1715283435/blog/jesusinhealthcare/thge9bks39icwygsntyg.jpg',
        alt: 'Jeusus In Healthcare homepage design on a laptop purched on a rock.',
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
    id: 'JesusInHealthcare',
  },
  {
    name: 'Healthcare Reframed Podcast',
    description:
      'A podcast exploring how healthcare in America can be saved, featuring interviews with healthcare innovators from around the globe.',
    link: 'https://healthcarereframed.com',
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498941/uiio/healthcare%20reframed/Gradient_zcfkup.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760499386/uiio/healthcare%20reframed/YouTube_Intro_1080_ccpglv.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498938/uiio/healthcare%20reframed/Grid_Of_Guests_jtlpkg.mov',
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1760499294/uiio/healthcare%20reframed/Goran_xmvp05.jpg',
        alt: 'Goran, the guest of the Healthcare Reframed podcast sitting down with Judson how with a warm smile.',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760499692/uiio/healthcare%20reframed/Instagram_Scroll_qnt3j3.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498929/uiio/healthcare%20reframed/Slideshow_crn9zf.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760499346/uiio/healthcare%20reframed/Millions_Of_Boardrooms_1080_sd8sum.mov',
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1760498928/uiio/healthcare%20reframed/Transcript_g3bt3p.png',
        alt: 'Elliott, the guest of the Healthcare Reframed podcast sitting down with Judson how with a warm smile as a thumbnail on the healthcare reframed website.',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498942/uiio/healthcare%20reframed/Web_Scroll_phgaa1.mov',
      },
    ],
    id: 'HealthcareReframed',
  },
  {
    name: 'Float Visual',
    description:
      'Architecture visualization business specializing in creating stunning 3D renderings and animations for architectural projects.',
    link: '#',
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498911/uiio/float%20visual/Float_Logo_y5l8qf.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498923/uiio/float%20visual/Arch_Reveal_ukwhsq.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498913/uiio/float%20visual/Drop_Down_Menu_on6cuz.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498914/uiio/float%20visual/Animation_Of_Box_gmyxxg.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498923/uiio/float%20visual/Carousel_n2rqen.mov',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760498912/uiio/float%20visual/Fourm_nmoaia.mov',
      },
    ],
    id: 'project3',
  },
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
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
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
