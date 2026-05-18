import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { RichText } from "@/components/RichText";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta: FC<CtaProps> = ({ slice }) => {
  const { title, link } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#016951] p-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8 text-center md:px-16">
        {isFilled.richText(title) && (
          <div className="mb-4">
            <RichText
              field={title}
              additionalClassNames="text-center text-white"
            />
          </div>
        )}

        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          {link.map(
            (item, index) =>
              isFilled.link(item) && (
                <PrismicNextLink
                  key={index}
                  field={item}
                  className="w-full rounded-md bg-white px-8 py-4.5 text-center font-semibold text-[#016951] transition-colors hover:bg-emerald-50 md:w-auto md:min-w-[280px] md:px-10 md:py-5"
                />
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
