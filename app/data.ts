type MediaItem = {
  type: 'video' | 'image' | 'animated'
  src: string
  alt?: string
  // For animated images converted from video
  animatedSrc?: string
  // Add dimensions for proper aspect ratio
  width?: number
  height?: number
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
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716443/uiio/jesus%20in%20healthcare/h4lx5perd7foxmjcjag3_h265_wkqdsg.mp4',
        width: 1080,
        height: 1920,
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1760716446/uiio/jesus%20in%20healthcare/thge9bks39icwygsntyg_Medium_m3l3mq.jpg',
        alt: 'Jeusus In Healthcare homepage design on a laptop purched on a rock.',
        width: 1000,
        height: 1000,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716443/uiio/jesus%20in%20healthcare/m81aiouhifbusqedsm28_h265_ipham2.mp4',
        width: 1080,
        height: 1920,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716447/uiio/jesus%20in%20healthcare/tekhsb4qtcpoavecj96w_h265_d8bbv4.mp4',
        width: 1920,
        height: 1080,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716442/uiio/jesus%20in%20healthcare/jq29zpqez54zlf1zv4lc_h265_t9noie.mp4',
        width: 1080,
        height: 1920,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716444/uiio/jesus%20in%20healthcare/sadk6tqu7t7j2sqojiu1_h265_lr9frc.mp4',
        width: 1920,
        height: 1080,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716444/uiio/jesus%20in%20healthcare/odiohfu0r5bfentluti9_h265_xzsp0f.mp4',
        width: 1920,
        height: 1080,
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
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717945/uiio/healthcare%20reframed/Gradient_ermvxb.mp4',
        width: 1608,
        height: 1760,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717950/uiio/healthcare%20reframed/Instagram_Scroll_h265_l76egu.mp4',
        width: 884,
        height: 1622,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717955/uiio/healthcare%20reframed/Millions_Of_Boardrooms_1080_h265_e2kerh.mp4',
        width: 1920,
        height: 1096,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717946/uiio/healthcare%20reframed/Grid_Of_Guests_h265_qcwjoi.mp4',
        width: 1666,
        height: 1674,
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1760717944/uiio/healthcare%20reframed/Goran_hdsyic.jpg',
        width: 1280,
        height: 853,
        alt: 'Goran, the guest of the Healthcare Reframed podcast sitting down with Judson how with a warm smile.',
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717950/uiio/healthcare%20reframed/Slideshow_h265_mjqfrd.mp4',
        width: 1724,
        height: 2162,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717956/uiio/healthcare%20reframed/YouTube_Intro_1080_h265_partial_x5om0l.mp4',
        width: 1920,
        height: 1332,
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1760717950/uiio/healthcare%20reframed/Transcript_Large_almupr.jpg',
        alt: 'Elliott, the guest of the Healthcare Reframed podcast sitting down with Judson how with a warm smile as a thumbnail on the healthcare reframed website.',
        width: 1140,
        height: 1280,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717959/uiio/healthcare%20reframed/Web_Scroll_h265_u0lcyz.mp4',
        width: 2640,
        height: 1674,
      },
    ],
    id: 'HealthcareReframed',
  },
  {
    name: 'Float Visual',
    description:
      'Architecture visualization business specializing in creating stunning 3D renderings and animations for architectural projects.',
    link: 'https://www.floatvisual.com/',
    media: [
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760717087/uiio/float%20visual/Float_Logo_qeineq.mov',
        width: 1080,
        height: 1080,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716916/uiio/float%20visual/Carousel_h265_owf2rx.mp4',
        width: 1128,
        height: 1734,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716913/uiio/float%20visual/Animation_Of_Box_h265_ei2xt1.mp4',
        width: 1080,
        height: 1080,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716916/uiio/float%20visual/Arch_Reveal_h265_ocuwiy.mp4',
        width: 1920,
        height: 1080,
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/mindflip/image/upload/v1760716912/uiio/float%20visual/Bottom_Menu_o5aris.png',
        alt: 'Footer menu of float visual.com with white background and orange text.',
        width: 956,
        height: 1248,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716913/uiio/float%20visual/Animation_Of_Box_h265_ei2xt1.mp4',
        width: 1080,
        height: 1080,
      },
      {
        type: 'video',
        src: 'https://res.cloudinary.com/mindflip/video/upload/v1760716914/uiio/float%20visual/Drop_Down_Menu_h265_yh6n29.mp4',
        width: 1342,
        height: 1728,
      },
    ],
    id: 'Float Visual',
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
