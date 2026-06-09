import { useEffect } from 'react';

/**
 * useStylesheet - Hook for dynamically loading CSS files
 * 
 * This hook allows components to load brand-specific CSS stylesheets
 * dynamically when the component mounts, and removes them when unmounted.
 * 
 * This is how each brand site applies its unique styling:
 * - HiCafe loads /assets/css/hicafe.css
 * - HiTech loads /assets/css/hitech.css
 * - MyLad loads /mylad/css/style.css
 * - etc.
 * 
 * USAGE EXAMPLE:
 * 
 * function HiCafeLayout() {
 *   // This loads hicafe.css when component mounts, removes it when unmounts
 *   useStylesheet('/assets/css/hicafe.css');
 *   
 *   return <div>HiCafe content</div>;
 * }
 * 
 * You can also load multiple stylesheets at once:
 * useStylesheet(['/assets/css/style1.css', '/assets/css/style2.css']);
 * 
 * HOW IT WORKS:
 * 1. When component mounts, creates <link> tag in document <head>
 * 2. If file already loaded, avoids duplicate (checks href)
 * 3. When component unmounts, removes the <link> tag
 * 4. This prevents CSS conflicts between different brand layouts
 * 
 * @param {string|Array} hrefs - Single CSS file path or array of paths
 */

export default function useStylesheet(hrefs) {
  useEffect(() => {
    if (!hrefs) return;
    
    // Support both single string and array of strings
    const paths = Array.isArray(hrefs) ? hrefs : [hrefs];
    const linkElements = [];

    paths.forEach((href) => {
      // Avoid loading the same stylesheet twice
      if (document.querySelector(`link[href="${href}"]`)) return;

      // Create and append <link> tag to <head>
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      linkElements.push(link);
    });

    // Cleanup: Remove stylesheets when component unmounts
    // This prevents CSS from one brand affecting another
    return () => {
      linkElements.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [hrefs]);
}
