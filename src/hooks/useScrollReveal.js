import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to add `is-visible` class
 * to child elements that have `.fade-up`, `.fade-left`, `.fade-right`, or `.scale-in`
 */
export default function useScrollReveal(threshold = 0.15) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      '.fade-up, .fade-left, .fade-right, .scale-in'
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);

  return sectionRef;
}
