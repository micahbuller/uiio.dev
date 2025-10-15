import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://uiio.dev/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'uiio.dev',
    template: '%s | uiio.dev'
  },
  description:  'uiio.dev is blending art, code, and storytelling to help brands and creators flow with purpose.',
};


const eduDiatype = localFont({
  src: './font/EduDiatypeMono-Regular.otf',
  display: 'swap',
  variable: '--font-edu-diatype',
})

const universNext = localFont({
  src: './font/UniversNextPro-Bold.ttf',
  display: 'swap',
  variable: '--font-univers-next',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${universNext.variable} ${eduDiatype.variable} tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-edu-diatype)]">
            <div className="relative w-full flex-1 px-8 pt-20 lg:px-12">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
