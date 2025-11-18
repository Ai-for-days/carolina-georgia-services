export function generateComprehensiveServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Carolina Georgia Services",
    "@id": "https://carolina-georgia-services.vercel.app",
    "url": "https://carolina-georgia-services.vercel.app",
    "logo": "https://carolina-georgia-services.vercel.app/hero-hvac.webp",
    "image": "https://carolina-georgia-services.vercel.app/hero-hvac.webp",
    "description": "Professional HVAC, plumbing, and electrical services for residential and commercial properties across South Carolina, North Carolina, and Georgia. 24/7 emergency service available.",
    "telephone": "+(888) 885-7330",
    "email": "info@carolinageorgiaservices.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Richland County",
      "addressLocality": "Columbia",
      "addressRegion": "SC",
      "postalCode": "29201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0007,
      "longitude": -81.0348
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "South Carolina"
      },
      {
        "@type": "State",
        "name": "North Carolina"
      },
      {
        "@type": "State",
        "name": "Georgia"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC, Plumbing & Electrical Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "HVAC Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AC Installation & Repair",
                "description": "Professional air conditioning installation, repair, and maintenance services for residential and commercial properties",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Furnace Service & Replacement",
                "description": "Complete furnace repair, maintenance, and replacement services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Heat Pump Systems",
                "description": "Heat pump installation, repair, and maintenance for year-round comfort",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ductless Mini Split Installation",
                "description": "Ductless mini split system installation and service",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency HVAC Service",
                "description": "24/7 emergency HVAC repair services with fast response times",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                },
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "servicePhone": {
                    "@type": "ContactPoint",
                    "telephone": "+(888) 885-7330",
                    "contactType": "Emergency Service"
                  }
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HVAC Maintenance",
                "description": "Preventive HVAC maintenance and tune-up services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Plumbing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Plumbing Repairs",
                "description": "24/7 emergency plumbing repair services for burst pipes, leaks, and clogs",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                },
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "servicePhone": {
                    "@type": "ContactPoint",
                    "telephone": "+(888) 885-7330",
                    "contactType": "Emergency Service"
                  }
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water Heater Installation & Repair",
                "description": "Water heater installation, repair, and replacement including tankless systems",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Drain Cleaning",
                "description": "Professional drain cleaning and clog removal services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Leak Detection & Repair",
                "description": "Advanced leak detection and repair services using modern technology",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sewer Line Service",
                "description": "Sewer line inspection, repair, and replacement services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fixture Installation",
                "description": "Plumbing fixture installation including faucets, sinks, and toilets",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Electrical Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Electrical Repairs",
                "description": "Professional electrical repair services for homes and businesses",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Electrical Panel Upgrades",
                "description": "Electrical panel upgrade and replacement services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Generator Installation",
                "description": "Backup generator installation and maintenance for home and business",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lighting Installation",
                "description": "Indoor and outdoor lighting installation services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Electrical Service",
                "description": "24/7 emergency electrical repair services",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                },
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "servicePhone": {
                    "@type": "ContactPoint",
                    "telephone": "+(888) 885-7330",
                    "contactType": "Emergency Service"
                  }
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "EV Charger Installation",
                "description": "Electric vehicle charger installation for home and commercial properties",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Carolina Georgia Services"
                }
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "487"
    }
  };
}
