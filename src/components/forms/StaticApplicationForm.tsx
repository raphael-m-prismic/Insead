"use client";

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

const DEFAULT_SESSIONS = ["January 2026", "September 2026", "January 2027"];

const inputClassName =
  "w-full border border-gray-300 rounded-md px-4 py-3 text-base text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent";

const labelClassName =
  "block mb-2 text-sm font-semibold text-[var(--brand-primary)]";

export type StaticApplicationFormProps = {
  firstNameLabel?: string;
  lastNameLabel?: string;
  genderLabel?: string;
  dateOfBirthLabel?: string;
  nationalityLabel?: string;
  workPhoneLabel?: string;
  emailLabel?: string;
  sessionLabel?: string;
  submitLabel?: string;
  sessions?: string[];
};

export function StaticApplicationForm({
  firstNameLabel,
  lastNameLabel,
  genderLabel,
  dateOfBirthLabel,
  nationalityLabel,
  workPhoneLabel,
  emailLabel,
  sessionLabel,
  submitLabel,
  sessions,
}: StaticApplicationFormProps) {
  const firstName = firstNameLabel?.trim() || "First name";
  const lastName = lastNameLabel?.trim() || "Last name";
  const gender = genderLabel?.trim() || "Gender";
  const dateOfBirth = dateOfBirthLabel?.trim() || "Date of birth";
  const nationality = nationalityLabel?.trim() || "Nationality / Passport";
  const workPhone = workPhoneLabel?.trim() || "Work phone";
  const email = emailLabel?.trim() || "Email";
  const session = sessionLabel?.trim() || "Session";
  const submit = submitLabel?.trim() || "Submit";
  const sessionOptions = sessions && sessions.length > 0 ? sessions : DEFAULT_SESSIONS;

  const requiredMark = (
    <span className="text-red-500 ml-1" aria-hidden="true">
      *
    </span>
  );

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      <div>
        <label htmlFor="first_name" className={labelClassName}>
          {firstName}
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
          {lastName}
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
          {gender}
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
          {dateOfBirth}
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
          {nationality}
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
          {workPhone}
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
          {email}
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
          {session}
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
          {sessionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2 mt-8 md:mt-10 flex justify-center md:justify-end">
        <button
          type="submit"
          className="w-full md:w-auto rounded-md bg-[var(--brand-primary)] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#016951] cursor-pointer"
        >
          {submit}
        </button>
      </div>
    </form>
  );
}
