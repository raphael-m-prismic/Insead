import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";
import { StaticApplicationForm } from "@/components/forms/StaticApplicationForm";

/**
 * Props for `ApplicationForm`.
 */
export type ApplicationFormProps =
  SliceComponentProps<Content.ApplicationFormSlice>;

/**
 * Component for "ApplicationForm" Slices.
 */
const ApplicationForm: FC<ApplicationFormProps> = ({ slice }) => {
  const {
    title,
    description,
    first_name_label,
    last_name_label,
    gender_label,
    date_of_birth_label,
    nationality_label,
    work_phone_label,
    email_label,
    session_label,
    submit_label,
    sessions,
    privacy_text,
  } = slice.primary;

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

        <StaticApplicationForm
          firstNameLabel={first_name_label ?? undefined}
          lastNameLabel={last_name_label ?? undefined}
          genderLabel={gender_label ?? undefined}
          dateOfBirthLabel={date_of_birth_label ?? undefined}
          nationalityLabel={nationality_label ?? undefined}
          workPhoneLabel={work_phone_label ?? undefined}
          emailLabel={email_label ?? undefined}
          sessionLabel={session_label ?? undefined}
          submitLabel={submit_label ?? undefined}
          sessions={sessions
            .map((s) => s.name)
            .filter((n): n is string => isFilled.keyText(n))}
        />

        {isFilled.richText(privacy_text) && (
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

export default ApplicationForm;
