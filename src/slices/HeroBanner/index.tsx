import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner: FC<HeroBannerProps> = ({ slice }) => {
  /**
   * Image
   */
  if (slice.variation === "image") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage field={slice.primary.image} className="w-full h-full max-h-137.5 object-cover" />
        )}
      </section>
    );
  }

  /**
   * Video
   */
  if (slice.variation === "video") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {isFilled.link(slice.primary.video) && (
          <video
            src={slice.primary.video.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full max-h-137.5 object-cover"
          />
        )}
      </section>
    );
  }
};

export default HeroBanner;
