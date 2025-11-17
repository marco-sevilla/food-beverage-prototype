'use client';

import React, { useState, useEffect, useRef } from 'react';

interface PageTransitionProps {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  isVisible,
  children,
  className = ''
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      // Show the container immediately
      setShowContent(true);
      // Start animation after a small delay
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      setIsAnimating(false);
      // Hide container after animation completes
      const timer = setTimeout(() => {
        setShowContent(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Stagger child animations
  useEffect(() => {
    if (isAnimating && contentRef.current) {
      const children = contentRef.current.querySelectorAll('.animate-item');
      children.forEach((child, index) => {
        const element = child as HTMLElement;
        element.style.transitionDelay = `${index * 80}ms`;
      });
    }
  }, [isAnimating]);

  if (!showContent) return null;

  return (
    <div
      className={`fixed inset-0 z-40 ${className}`}
      style={{
        backgroundColor: isAnimating ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
        transition: 'background-color 300ms ease-out, backdrop-filter 300ms ease-out'
      }}
    >
      <div
        ref={contentRef}
        className={`h-full transition-all duration-300 ease-out ${
          isAnimating 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// Higher-order component for wrapping page content with staggered animations
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = ''
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
      if (sectionRef.current) {
        sectionRef.current.classList.add('animate-in');
      }
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`animate-item ${className}`}
    >
      {children}
    </div>
  );
};

// CSS for the staggered animation (to be added to global styles)
export const pageTransitionStyles = `
.animate-item {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}
`;