import React, { useState } from "react";
import { motion } from "motion/react";

interface LazyImageProps extends React.ComponentProps<typeof motion.img> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  placeholderClassName = "",
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-50">
      {/* Blur/loading placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-stone-100/90 animate-pulse z-10 transition-opacity duration-300 ${placeholderClassName}`}
        />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`${className}`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
}
