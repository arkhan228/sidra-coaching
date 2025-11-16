import { Inter } from 'next/font/google';
import '@styles/globals.css';

import Header from '@components/Header';
import Footer from '@components/Footer';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Sidra Coaching',
    default: 'Welcome | Sidra Coaching',
  },
  description:
    "A one of a kind institute that provides hands-on academic coaching and value-based education in English, Mathematics, Hindi, Urdu and the Holy Qur'an.",
  keywords: [
    'coaching',
    'english',
    'mathematics',
    'hindi',
    'urdu',
    'quran',
    'tutoring',
    'character development',
    'value-based education',
    'academic excellence',
  ],
  openGraph: {
    title: 'Sidra Coaching - Learning that builds skills & character',
    description:
      "A one of a kind institute that provides hands-on academic coaching and value-based education in English, Mathematics, Hindi, Urdu and the Holy Qur'an.",
    url: siteUrl,
    images: ['/og-image.png'],
    siteName: 'Sidra Coaching',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sidra Coaching - Learning that builds skills & character',
    description:
      "A one of a kind institute that provides hands-on academic coaching and value-based education in English, Mathematics, Hindi, Urdu and the Holy Qur'an.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${inter.className} antialiased  text-accent-950`}>
        <Header />
        <main className='flex flex-col max-w-screen-sm mx-auto md:max-w-screen-md md:text-xl xl:text-2xl lg:max-w-screen-lg xl:max-w-screen-xl'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
