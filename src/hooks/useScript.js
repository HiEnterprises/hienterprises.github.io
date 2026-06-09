import { useEffect } from 'react';

export default function useScript(src, id, inlineContent) {
  useEffect(() => {
    if (!src && !inlineContent) return;

    // Check if script already exists to avoid duplicate scripts
    if (id && document.getElementById(id)) return;
    if (src && document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement('script');
    if (src) {
      script.src = src;
      script.async = true;
    }
    if (id) {
      script.id = id;
    }
    if (inlineContent) {
      script.textContent = inlineContent;
    }

    document.body.appendChild(script);

    return () => {
      console.log('useScript cleanup for id:', id);
      if (document.body.contains(script)) {
        console.log('Removing script tag:', id);
        document.body.removeChild(script);
      }
      if (id === 'tailwind-cdn') {
        const styleTags = Array.from(document.head.querySelectorAll('style'));
        console.log('All style tags in head:', styleTags.map(s => ({ id: s.id, className: s.className, attributes: Array.from(s.attributes).map(a => `${a.name}=${a.value}`) })));
        const tailwindStyle = document.getElementById('tailwindcss') || styleTags.find(s => s.textContent.includes('tailwind') || s.id.includes('tailwind') || s.id === 'tailwindcss');
        console.log('Tailwind style tag found:', !!tailwindStyle);
        if (tailwindStyle) {
          tailwindStyle.remove();
          console.log('Removed Tailwind style tag');
        }
      }

    };
  }, [src, id, inlineContent]);
}


