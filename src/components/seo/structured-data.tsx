'use client';

import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Caffeine Coders",
    "legalName": "Caffeine Coders Studio",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Suyash Gupta"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Avenue",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-7890",
      "contactType": "customer service",
      "email": "contact@caffeinecoders.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/caffeine-coders",
      "https://twitter.com/caffeine_coders",
      "https://github.com/caffeine-coders"
    ],
    "description": "AI-Powered Web & Data Science Solutions",
    "numberOfEmployees": 5,
    "knowsAbout": ["web development", "AI integration", "data science", "software engineering"]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Caffeine Coders Hub",
    "url": "https://yourdomain.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}