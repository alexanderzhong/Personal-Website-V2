import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function CaseStudyCarousel({ images, title }) {
  const hasMultipleImages = images.length > 1;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: hasMultipleImages,
  });

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    updateSelectedIndex();
    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section
      className="case-study-carousel"
      aria-label={`${title} screenshots`}
    >
      <div className="carousel-frame">
        <div className="carousel-viewport" ref={emblaRef}>
          <div className="carousel-container">
            {images.map((image, index) => (
              <div className="carousel-slide" key={image}>
                <img src={image} alt={`${title} screenshot ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {hasMultipleImages && (
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-button"
              onClick={scrollPrevious}
              aria-label="Show previous screenshot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="carousel-button"
              onClick={scrollNext}
              aria-label="Show next screenshot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {hasMultipleImages && (
        <>
          <div className="carousel-status" aria-live="polite">
            {selectedIndex + 1} / {images.length}
          </div>
          <div className="carousel-dots" aria-label="Choose screenshot">
            {scrollSnaps.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`carousel-dot ${
                  index === selectedIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Show screenshot ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
          <div
            className="carousel-thumbnails"
            aria-label="Screenshot thumbnails"
          >
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`carousel-thumbnail ${
                  index === selectedIndex ? "carousel-thumbnail-active" : ""
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Show screenshot ${index + 1}`}
                tabIndex={-1}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default CaseStudyCarousel;
