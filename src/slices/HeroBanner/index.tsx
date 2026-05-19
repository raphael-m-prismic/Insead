import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/components/RichText";

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
   * Image with text
   */
  if (slice.variation === "imageWithText") {
    const { background_image, title, description } = slice.primary;

    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative w-full h-[80vh] max-h-100 overflow-hidden"
      >
        {isFilled.image(background_image) && (
          <PrismicNextImage
            field={background_image}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            {isFilled.richText(title) && (
              <RichText
                field={title}
                additionalClassNames="mb-4 text-white"
              />
            )}
            {isFilled.richText(description) && (
              <RichText
                field={description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-lg md:text-xl leading-relaxed text-white">
                      {children}
                    </p>
                  ),
                }}
              />
            )}
          </div>
        </div>
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
