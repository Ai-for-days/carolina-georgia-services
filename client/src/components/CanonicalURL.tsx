import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface CanonicalURLProps {
  path?: string;
}

export default function CanonicalURL({ path }: CanonicalURLProps) {
  const [location] = useLocation();
  const canonicalPath = path || location;
  const canonicalURL = `https://www.carolinageorgiaservices.com${canonicalPath}`;

  useEffect(() => {
    // Remove existing canonical link if any
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalURL;
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      const canonicalLink = document.querySelector(`link[rel="canonical"][href="${canonicalURL}"]`);
      if (canonicalLink) {
        canonicalLink.remove();
      }
    };
  }, [canonicalURL]);

  return null;
}
