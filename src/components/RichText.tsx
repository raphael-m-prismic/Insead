import { PrismicRichText } from "@prismicio/react";
import type { RichTextField } from "@prismicio/client";
import type { RichTextComponents } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  field: RichTextField;
  components?: RichTextComponents;
  additionalClassNames?: string;
};

export function RichText({ field, components, additionalClassNames }: Props) {
  const defaultComponents: RichTextComponents = {
    heading1: ({ children }) => (
      <h1
        className={clsx(
          "mb-5 text-4xl text-(--color-text-primary) md:mb-6",
          additionalClassNames,
        )}
      >
        {children}
      </h1>
    ),
    heading2: ({ children }) => (
      <h2
        className={clsx(
          "mb-5 text-3xl text-(--color-text-primary) md:mb-6",
          additionalClassNames,
        )}
      >
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3
        className={clsx(
          "mb-3 text-2xl text-(--color-text-primary) md:mb-4",
          additionalClassNames,
        )}
      >
        {children}
      </h3>
    ),
    heading4: ({ children }) => (
      <h4
        className={clsx(
          "mb-3 text-xl text-(--color-text-primary) md:mb-4",
          additionalClassNames,
        )}
      >
        {children}
      </h4>
    ),
    heading5: ({ children }) => (
      <h5
        className={clsx(
          "mb-2 text-lg text-(--color-text-primary) md:text-xl",
          additionalClassNames,
        )}
      >
        {children}
      </h5>
    ),
    heading6: ({ children }) => (
      <h6
        className={clsx(
          "mb-2 text-base text-(--color-text-primary) md:text-lg",
          additionalClassNames,
        )}
      >
        {children}
      </h6>
    ),
    paragraph: ({ children }) => (
      <p
        className={clsx(
          "mb-4 text-(--color-text-secondary) text-[14px]",
          additionalClassNames,
        )}
      >
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className={clsx("font-bold", additionalClassNames)}>
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className={clsx("italic", additionalClassNames)}>{children}</em>
    ),
    hyperlink: ({ node, children }) => (
      <PrismicNextLink
        field={node.data}
        className={clsx(
          "text-(--brand-primary) underline",
          additionalClassNames,
        )}
      >
        {children}
      </PrismicNextLink>
    ),
    list: ({ children }) => (
      <ul
        className={clsx(
          "mb-4 list-disc pl-6 text-(--color-text-secondary) md:text-md",
          additionalClassNames,
        )}
      >
        {children}
      </ul>
    ),
    listItem: ({ children }) => (
      <li className={clsx("mb-2", additionalClassNames)}>{children}</li>
    ),
    oList: ({ children }) => (
      <ol
        className={clsx(
          "mb-4 list-decimal pl-6 text-(--color-text-secondary) md:text-md",
          additionalClassNames,
        )}
      >
        {children}
      </ol>
    ),
    oListItem: ({ children }) => (
      <li className={clsx("mb-2", additionalClassNames)}>{children}</li>
    ),
    preformatted: ({ children }) => (
      <pre
        className={clsx(
          "mb-4 overflow-x-auto rounded bg-(--color-surface) p-4 text-sm text-(--color-text-primary)",
          additionalClassNames,
        )}
      >
        {children}
      </pre>
    ),
    image: ({ node }) => (
      <figure className={clsx("my-6", additionalClassNames)}>
        <img
          src={node.url}
          alt={node.alt ?? ""}
          className={clsx("w-full rounded object-cover", additionalClassNames)}
        />
        {node.alt && (
          <figcaption
            className={clsx(
              "mt-2 text-center text-sm text-(--color-text-secondary)",
              additionalClassNames,
            )}
          >
            {node.alt}
          </figcaption>
        )}
      </figure>
    ),
    embed: ({ node }) => (
      <div
        className={clsx("my-6", additionalClassNames)}
        dangerouslySetInnerHTML={{ __html: node.oembed.html ?? "" }}
      />
    ),
    ...components,
  };

  return (
    <PrismicRichText
      field={field}
      components={{
        ...defaultComponents,
        ...components,
      }}
    />
  );
}
