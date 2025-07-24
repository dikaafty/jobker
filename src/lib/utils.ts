import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
}

export const runObserver = (...refs: React.RefObject<HTMLElement>[]): () => void => {
  const options = {
    root: null,
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const animationClass: string | undefined = (entry.target as HTMLElement).dataset.animate;

      if(animationClass !== undefined) {
        entry.target.classList.toggle(animationClass, entry.isIntersecting);
      }
    });
  }, options);

  refs.forEach((ref) => {
    if (Array.isArray(ref.current)) {
      ref.current.forEach((r: HTMLElement) => {
        if (r) observer.observe(r);
      });
    } else {
      if (ref.current) observer.observe(ref.current);
    }
  });

  return () => observer.disconnect();
}

export const capitalize = (str: string): string => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}