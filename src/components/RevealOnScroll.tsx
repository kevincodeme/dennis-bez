import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
  direction?: 'up' | 'none';
}

/**
 * Reusable intersection-observer component that reveals children with
 * a subtle, elegant architectural fade-up effect when scrolled into view.
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const transformStyle = isVisible
    ? 'translate3d(0, 0, 0)'
    : direction === 'up'
    ? 'translate3d(0, 32px, 0)'
    : 'translate3d(0, 0, 0)';

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
