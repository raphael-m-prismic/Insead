export type EmptyFormProps = {
  formId?: string;
};

export function EmptyForm({ formId }: EmptyFormProps) {
  const trimmedId = formId?.trim();

  return (
    <div className="max-w-2xl mx-auto rounded-lg border border-gray-300 bg-gray-50 px-8 py-6 flex flex-col items-center gap-2 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-gray-400"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>

      <h3 className="text-lg font-semibold text-gray-700">
        Form not found
      </h3>

      <p className="text-sm text-gray-500">
        {trimmedId ? (
          <>
            No form found for ID:{" "}
            <span className="font-mono">&quot;{trimmedId}&quot;</span>.
          </>
        ) : (
          "No form ID was provided."
        )}
      </p>
    </div >
  );
}
