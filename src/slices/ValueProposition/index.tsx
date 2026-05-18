import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/components/RichText";

/**
 * Props for `ValueProposition`.
 */
export type ValuePropositionProps =
  SliceComponentProps<Content.ValuePropositionSlice>;

/**
 * Component for "ValueProposition" Slices.
 */
const ValueProposition: FC<ValuePropositionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-12 max-w-7xl p-10 text-center md:mb-16">
          <RichText
            field={slice.primary.title}
            additionalClassNames="text-center"
            components={{
              strong: ({ children }) => (
                <strong className="font-bold text-[var(--brand-primary)]">
                  {children}
                </strong>
              ),
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {slice.primary.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {isFilled.image(item.icon) && (
                <PrismicNextImage
                  field={item.icon}
                  className="mb-6 h-24 w-24 aspect-square object-cover rounded-full"
                />
              )}
              {item.title && (
                <h3 className="mb-3 text-xl font-semibold text-[var(--brand-primary)]">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="text-[#686e71] leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
