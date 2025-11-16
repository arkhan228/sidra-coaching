// app/head.js
export default function Head() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Sidra Coaching',
    url: 'https://sidracoaching.netlify.app',
    logo: '_assets/logo.png',
    description:
      "Hands-on, value-based coaching in English, Math, Hindi, Urdu and the Holy Qur'an.",
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8278648970',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Urdu'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'In-front of Jama Masjid',
      addressLocality: 'Sherani Abad',
      addressRegion: 'Rajasthan',
      postalCode: '341302',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/share/g/17VqZdyVfm/',
      'https://www.instagram.com/sidra_coaching_centre',
      'https://www.youtube.com/@Sidracoachingcenter',
    ],
    email: 'sidracoachingcenter@gmail.com',
    foundingDate: '2018',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}
