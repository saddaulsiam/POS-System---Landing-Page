"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out";

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} translate-y-12 opacity-0`;
        case "fade-in":
          return `${baseClass} opacity-0`;
        case "slide-left":
          return `${baseClass} -translate-x-12 opacity-0`;
        case "slide-right":
          return `${baseClass} translate-x-12 opacity-0`;
        case "zoom-in":
          return `${baseClass} scale-95 opacity-0`;
        default:
          return `${baseClass} translate-y-12 opacity-0`;
      }
    }

    return `${baseClass} translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div ref={sectionRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}
