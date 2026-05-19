import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";
import { EmptyForm } from "@/components/forms/EmptyForm";
import { FORM_REGISTRY } from "@/components/forms/registry";

/**
 * Props for `IdForm`.
 */
export type IdFormProps = SliceComponentProps<Content.IdFormSlice>;

/**
 * Component for "IdForm" Slices.
 */
const IdForm: FC<IdFormProps> = ({ slice }) => {
  const { title, description, form_id, privacy_text } = slice.primary;

  const formId = form_id?.trim();
  const FormComponent = formId ? FORM_REGISTRY[formId] : undefined;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        {isFilled.richText(title) && <RichText field={title} />}

        {isFilled.richText(description) && (
          <div className="mb-10 md:mb-12">
            <RichText field={description} />
          </div>
        )}

        {FormComponent ? (
          <FormComponent />
        ) : (
          <EmptyForm formId={formId} />
        )}

        {FormComponent && isFilled.richText(privacy_text) && (
          <div className="mt-8">
            <RichText
              field={privacy_text}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-sm italic text-[var(--color-text-secondary)]">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default IdForm;
