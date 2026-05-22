import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/components/RichText";

/**
 * Props for `TextImage`.
 */
export type TextImageProps = SliceComponentProps<Content.TextImageSlice>;

/**
 * Component for "TextImage" Slices.
 */
const TextImage: FC<TextImageProps> = ({ slice }) => {
  const { image, title, text } = slice.primary;

  /**
   * Default — image on the left, text on the right
   */
  if (slice.variation === "default") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {isFilled.image(image) && (
            <div className="relative w-full">
              <PrismicNextImage
                field={image}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div>
            {isFilled.richText(title) && <RichText field={title} />}
            {isFilled.richText(text) && <RichText field={text} />}
          </div>
        </div>
      </section>
    );
  }

  /**
   * Image Right — image on the right, text on the left
   */
  if (slice.variation === "imageRight") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="md:order-1">
            {isFilled.richText(title) && <RichText field={title} />}
            {isFilled.richText(text) && <RichText field={text} />}
          </div>

          {isFilled.image(image) && (
            <div className="relative w-full md:order-2">
              <PrismicNextImage
                field={image}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  return null;
};

export default TextImage;
