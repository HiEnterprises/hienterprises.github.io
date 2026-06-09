import { useEffect } from 'react';

export default function useStylesheet(hrefs) {
  useEffect(() => {
    if (!hrefs) return;
    const paths = Array.isArray(hrefs) ? hrefs : [hrefs];
    const linkElements = [];

    paths.forEach((href) => {
      // Avoid duplicate links
      if (document.querySelector(`link[href="${href}"]`)) return;

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      linkElements.push(link);
    });

    return () => {
      linkElements.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [hrefs]);
}
