import { useEffect } from 'react';
import { APP_TITLE } from '@/const';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: object;
}

export default function SEO({ title, description, keywords, canonical, schema }: SEOProps) {
  // Auto-generate canonical URL if not provided
  const baseUrl = 'https://carolina-georgia-services.vercel.app';
  const currentPath = window.location.pathname;
  const autoCanonical = canonical || `${baseUrl}${currentPath}`;
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Set meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Set canonical URL (auto-generated or provided)
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', autoCanonical);
    
    // Add structured data (schema.org) if provided
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, autoCanonical, schema]);
  
  return null;
}

// Helper function to generate LocalBusiness schema
export function generateLocalBusinessSchema(location?: string) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": APP_TITLE,
    "image": "https://carolina-georgia-services.vercel.app/hero-hvac.webp",
    "description": "Professional HVAC, plumbing, and electrical services for residential and commercial properties in South Carolina, North Carolina, and Georgia.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Richland County",
      "addressLocality": location || "Columbia",
      "addressRegion": "SC",
      "postalCode": "29201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0007,
      "longitude": -81.0348
    },
    "url": "https://carolinageorgiaservices.com",
    "telephone": "+(888) 885-7330",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "State",
      "name": "South Carolina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC, Plumbing and Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC Services",
            "description": "Heating, ventilation, and air conditioning installation, repair, and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing Services",
            "description": "Comprehensive plumbing solutions including repairs, installations, and emergency services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Services",
            "description": "Licensed electrical installations, repairs, and upgrades"
          }
        }
      ]
    }
  };
  
  return baseSchema;
}
