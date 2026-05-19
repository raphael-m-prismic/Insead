import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";

/**
 * Props for `Statement`.
 */
export type StatementProps = SliceComponentProps<Content.StatementSlice>;

/**
 * Component for "Statement" Slices.
 */
const Statement: FC<StatementProps> = ({ slice }) => {
  const { eyebrow, title } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full"
    >
      <div className="w-full mx-auto max-w-7xl bg-[#016951] rounded-br-[120px] md:rounded-br-[180px] px-8 py-16 md:px-16 md:py-24">
        <div className="max-w-5xl">
          {isFilled.keyText(eyebrow) && (
            <p className="mb-4 md:mb-6 text-sm md:text-base font-semibold text-emerald-300">
              {eyebrow}
            </p>
          )}

          {isFilled.richText(title) && (
            <RichText
              field={title}
              additionalClassNames="text-white"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Statement;
