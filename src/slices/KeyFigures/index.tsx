import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";

/**
 * Props for `KeyFigures`.
 */
export type KeyFiguresProps = SliceComponentProps<Content.KeyFiguresSlice>;

/**
 * Component for "KeyFigures" Slices.
 */
const KeyFigures: FC<KeyFiguresProps> = ({ slice }) => {
  const { eyebrow, title, items } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#016951] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="mb-16 md:mb-24">
          {isFilled.keyText(eyebrow) && (
            <p className="mb-4 text-sm font-semibold tracking-wider text-[#88c697] uppercase">
              {eyebrow}
            </p>
          )}
          {isFilled.richText(title) && (
            <RichText field={title} additionalClassNames="text-white" />
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={
                index % 3 !== 0
                  ? "lg:border-l lg:border-[#e9f4ea40] lg:pl-8"
                  : ""
              }
            >
              {isFilled.keyText(item.value) && (
                <p className="text-[48px] leading-none font-extralight text-white md:text-[64px]">
                  {item.value}
                </p>
              )}
              {isFilled.keyText(item.label) && (
                <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-[#9bd9aa]">
                  {item.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
