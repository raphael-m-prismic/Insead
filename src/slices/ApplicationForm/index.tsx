"use client";

import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";

const GENDER_OPTIONS = ["Male", "Female", "Non Binary", "Prefer not to answer"];

const NATIONALITY_OPTIONS = [
  "France",
  "United Kingdom",
  "United States",
  "Germany",
  "Spain",
  "Italy",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Poland",
  "Portugal",
  "Greece",
  "Ireland",
  "Austria",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Colombia",
  "China",
  "Japan",
  "South Korea",
  "India",
  "Singapore",
  "Indonesia",
  "Vietnam",
  "Thailand",
  "Philippines",
  "Malaysia",
  "Australia",
  "New Zealand",
  "South Africa",
  "Nigeria",
  "Kenya",
  "Egypt",
  "Morocco",
  "United Arab Emirates",
  "Saudi Arabia",
  "Turkey",
  "Israel",
  "Russia",
  "Ukraine",
  "Other",
];

const inputClassName =
  "w-full border border-gray-300 rounded-md px-4 py-3 text-base text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent";

const labelClassName =
  "block mb-2 text-sm font-semibold text-[var(--brand-primary)]";

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

  const requiredMark = (
    <span className="text-red-500 ml-1" aria-hidden="true">
      *
    </span>
  );

  const firstNameLabel = isFilled.keyText(first_name_label)
    ? first_name_label
    : "First name";
  const lastNameLabel = isFilled.keyText(last_name_label)
    ? last_name_label
    : "Last name";
  const genderLabel = isFilled.keyText(gender_label) ? gender_label : "Gender";
  const dateOfBirthLabel = isFilled.keyText(date_of_birth_label)
    ? date_of_birth_label
    : "Date of birth";
  const nationalityLabel = isFilled.keyText(nationality_label)
    ? nationality_label
    : "Nationality / Passport";
  const workPhoneLabel = isFilled.keyText(work_phone_label)
    ? work_phone_label
    : "Work phone";
  const emailLabel = isFilled.keyText(email_label) ? email_label : "Email";
  const sessionLabel = isFilled.keyText(session_label)
    ? session_label
    : "Session";
  const submitLabel = isFilled.keyText(submit_label) ? submit_label : "Submit";

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

        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div>
            <label htmlFor="first_name" className={labelClassName}>
              {firstNameLabel}
              {requiredMark}
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              required
              aria-required="true"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="last_name" className={labelClassName}>
              {lastNameLabel}
              {requiredMark}
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              required
              aria-required="true"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="gender" className={labelClassName}>
              {genderLabel}
              {requiredMark}
            </label>
            <select
              id="gender"
              name="gender"
              defaultValue=""
              required
              aria-required="true"
              className={inputClassName}
            >
              <option value="" disabled>
                Select gender
              </option>
              {GENDER_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date_of_birth" className={labelClassName}>
              {dateOfBirthLabel}
              {requiredMark}
            </label>
            <input
              id="date_of_birth"
              name="date_of_birth"
              type="date"
              required
              aria-required="true"
              className={inputClassName}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="nationality" className={labelClassName}>
              {nationalityLabel}
              {requiredMark}
            </label>
            <select
              id="nationality"
              name="nationality"
              defaultValue=""
              required
              aria-required="true"
              className={inputClassName}
            >
              <option value="" disabled>
                Select nationality
              </option>
              {NATIONALITY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="work_phone" className={labelClassName}>
              {workPhoneLabel}
              {requiredMark}
            </label>
            <input
              id="work_phone"
              name="work_phone"
              type="tel"
              required
              aria-required="true"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              {emailLabel}
              {requiredMark}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              className={inputClassName}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="session" className={labelClassName}>
              {sessionLabel}
              {requiredMark}
            </label>
            <select
              id="session"
              name="session"
              defaultValue=""
              required
              aria-required="true"
              className={inputClassName}
            >
              <option value="" disabled>
                Select session
              </option>
              {sessions.map(
                (session, index) =>
                  isFilled.keyText(session.name) && (
                    <option key={index} value={session.name}>
                      {session.name}
                    </option>
                  ),
              )}
            </select>
          </div>

          <div className="md:col-span-2 mt-8 md:mt-10 flex justify-center md:justify-end">
            <button
              type="submit"
              className="w-full md:w-auto rounded-md bg-[var(--brand-primary)] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#016951] cursor-pointer"
            >
              {submitLabel}
            </button>
          </div>
        </form>

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
