import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cozy Baked | Premium Artisanal Cake Shop in Lucknow',
  description:
    'Discover thoughtfully crafted cakes and baked treats from Cozy Baked in Lucknow. Bespoke birthday, anniversary, and celebration cakes made with love.',
  keywords: [
    'Cozy Baked',
    'Cake shop in Lucknow',
    'Cakes in Lucknow',
    'Cake shop near IIM Road Lucknow',
    'Custom cakes in Lucknow',
    'Artisanal bakery Lucknow',
    'Birthday cakes Lucknow',
    'Anniversary cakes Lucknow',
  ],
  authors: [{ name: 'Cozy Baked' }],
  openGraph: {
    title: 'Cozy Baked | Premium Artisanal Cake Shop in Lucknow',
    description:
      'Beautiful cakes, made for beautiful moments. Thoughtfully crafted celebration and custom cakes in Lucknow.',
    url: 'https://maps.app.goo.gl/LygJXWCjxkbYjCk77',
    siteName: 'Cozy Baked',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cozy Baked | Premium Cake Shop in Lucknow',
    description:
      'Beautiful cakes, made for beautiful moments. Thoughtfully crafted cakes and treats in Lucknow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Cozy Baked',
    logo: '/images/cozy_baked_logo.jpg',
    image: '/images/hero_luxury_cake_1790333825118.jpg',
    telephone: '07007791342',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D-21, IIM Rd, Madhupuram Colony, Bhitauli',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226013',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.9200',
      longitude: '80.9200',
    },
    url: 'https://maps.app.goo.gl/LygJXWCjxkbYjCk77',
    hasMap: 'https://maps.app.goo.gl/LygJXWCjxkbYjCk77',
    priceRange: '₹₹',
    servesCuisine: ['Cakes', 'Pastries', 'Bakery', 'Desserts'],
    description:
      'Cozy Baked is an artisanal cake shop located on IIM Road, Lucknow, specializing in handcrafted celebration cakes, custom designer cakes, and fresh baked treats.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '22:00',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FCFBF7] text-[#2D231E] selection:bg-[#EFE9DC] selection:text-[#1B120D] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
