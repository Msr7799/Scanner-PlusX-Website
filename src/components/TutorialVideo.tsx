"use client";

import { useEffect, useRef, useState } from "react";

export default function TutorialVideo({ name, alt }: { name: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const nearViewport = useRef(false);
  const [visibleOnce, setVisibleOnce] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      nearViewport.current = entry.isIntersecting;
      if (entry.isIntersecting) {
        setVisibleOnce(true);
        if (video.currentSrc) void video.play().catch(() => { /* Autoplay may be blocked by browser settings. */ });
      } else {
        video.pause();
      }
    }, { rootMargin: "200px" });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label={alt}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster={`/images/tutorials/${name}.webp`}
      onCanPlay={(event) => {
        if (nearViewport.current) void event.currentTarget.play().catch(() => { /* Autoplay may be blocked by browser settings. */ });
      }}
      className="absolute inset-0 h-full w-full object-contain"
    >
      {visibleOnce && <source src={`/images/tutorials/${name}.mp4`} type="video/mp4" />}
    </video>
  );
}
