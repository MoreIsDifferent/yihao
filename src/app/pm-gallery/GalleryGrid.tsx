"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/Icons";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
  basePath: string;
  aspectRatio?: "landscape" | "portrait";
};

export function GalleryGrid({
  images,
  basePath,
  aspectRatio = "landscape",
}: GalleryGridProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const imageFrameClass =
    aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)]"
          >
            <button
              type="button"
              onClick={() => setActiveImage(image)}
              className={`block ${imageFrameClass} w-full bg-[var(--border)] p-3 transition-colors hover:bg-accent-soft dark:hover:bg-accent/10`}
              aria-label={`View ${image.caption || image.alt}`}
            >
              <img
                src={`${basePath}${image.src}`}
                alt={image.alt}
                className="h-full w-full object-contain"
              />
            </button>
            {image.caption ? (
              <figcaption className="px-4 py-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <figure
            className="flex max-h-[92vh] max-w-[94vw] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`${basePath}${activeImage.src}`}
              alt={activeImage.alt}
              className="max-h-[86vh] max-w-full object-contain"
            />
            {activeImage.caption ? (
              <figcaption className="text-center text-xs text-white/80">
                {activeImage.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
