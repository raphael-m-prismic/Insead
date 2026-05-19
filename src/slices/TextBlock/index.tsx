import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock: FC<TextBlockProps> = ({ slice }) => {
  const { title, content } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {isFilled.richText(title) && (
          <div className="mb-6 md:mb-8">
            <RichText field={title} />
          </div>
        )}

        {isFilled.richText(content) && (
          <div className="rounded-xl bg-white shadow-xl px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
            <RichText field={content} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TextBlock;
