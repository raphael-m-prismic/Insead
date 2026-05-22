# Next.js + Prismic + Slice Machine Project

## Context

Next.js project with TypeScript, Tailwind CSS, and Prismic as the CMS via Slice Machine.
Slices live in `src/slices/`, custom types in `customtypes/`.

## Workflow for creating a new slice

When the user asks to create a new slice (usually from an image in `images/`), follow these steps **strictly**, with user validation between each one. **Never** skip a validation.

### Step 1 — Image analysis and field proposal

1. Read the provided image (path in `images/` or drag & drop)
2. Identify the visible content zones
3. Determine whether multiple **variations** are relevant (e.g., a version with image only, one with image + text, one with video). Propose variations as soon as a visual block has several logical declensions.
4. For each variation, propose a list of fields with:
   - **API ID** in snake_case (e.g., `background_image`, `cta_label`)
   - **Prismic type** (`Image`, `StructuredText`, `Link`, `Boolean`, `Select`, `Group`, etc.)
   - **Location**: `primary` (single field) or `items` (repeatable)
   - For `StructuredText`: specify the allowed `multi` formats (e.g., `heading1,strong,em` for a title, `paragraph,strong,em,hyperlink` for a description)
5. Propose a **slice name**: `id` in snake_case (e.g., `hero_banner`), `name` in PascalCase (e.g., `HeroBanner`)
6. Present everything in a structured format and **wait for explicit user validation** before moving to the next step.

### Step 2 — Create model.json and edit page type

1. Create the folder `src/slices/<PascalCaseName>/`
2. Create `src/slices/<PascalCaseName>/model.json` following **exactly** the structure of the reference file (see Conventions below)
3. Edit `customtypes/page/index.json` to add the slice in `Main.slices.config.choices`:
   ```json
   "<id_snake_case>": {
     "type": "SharedSlice"
   }
   ```
   (alphabetical order not required, add at the end)
4. Show the diff of created/modified files and **wait for explicit user validation**.

### Step 3 — Generate the index.tsx component

1. Create `src/slices/<PascalCaseName>/index.tsx` following **exactly** the pattern defined in Conventions below
2. If multiple variations, handle each one in a block `if (slice.variation === "<id>") { ... }`
3. Faithfully reproduce the design of the image with Tailwind
4. **Update `src/slices/index.ts`** to register the new component. Add a line following the existing pattern:
   ```ts
   <id_snake_case>: dynamic(() => import("./<PascalCaseName>")),
   ```
   Without this line, the Slice Simulator will throw `Could not find a component for slice type "<id>"`. If the file doesn't exist yet, read it first to match its exact format (it may use `dynamic` from `next/dynamic` or a different pattern).
5. Show the code of `index.tsx` and the diff of `src/slices/index.ts`, then **wait for explicit user validation**.

### Step 4 — Request Slice Machine push

1. Remind the user to:
   - Open Slice Machine (`npm run slicemachine` if not already running)
   - Click **Push** to sync the new slice with the Prismic repo
2. **Wait for confirmation** that the push is done.

### Step 5 — Suggest a commit message

Once the user has confirmed the push, propose a commit message (subject line only, no description). Keep it short, in conventional commits format, in English:

```
feat: add <PascalCaseName> slice
```

For variations added to an existing slice:
```
feat: add <variationId> variation to <PascalCaseName> slice
```

Just propose the message — **do not run `git commit`**. The user copies it and commits manually.

---

## Project conventions

### Structure of a `model.json`

```json
{
  "id": "<snake_case>",
  "type": "SharedSlice",
  "name": "<PascalCase>",
  "description": "<PascalCase>",
  "variations": [
    {
      "id": "<camelCase>",
      "name": "<Human Readable>",
      "docURL": "...",
      "version": "initial",
      "description": "Default",
      "imageUrl": "",
      "primary": {
        "<field_id>": {
          "type": "<FieldType>",
          "config": { ... }
        }
      },
      "items": {}
    }
  ]
}
```

### Common field configs

**Image**
```json
{
  "type": "Image",
  "config": {
    "label": "<Label>",
    "constraint": {},
    "thumbnails": []
  }
}
```

**StructuredText (title)**
```json
{
  "type": "StructuredText",
  "config": {
    "label": "Title",
    "placeholder": "",
    "allowTargetBlank": true,
    "multi": "heading1,strong,em"
  }
}
```

**StructuredText (description / paragraph)**
```json
{
  "type": "StructuredText",
  "config": {
    "label": "Description",
    "placeholder": "",
    "allowTargetBlank": true,
    "multi": "paragraph,strong,em,hyperlink"
  }
}
```

**Link (video or URL)**
```json
{
  "type": "Link",
  "config": {
    "label": "<Label>",
    "placeholder": "",
    "select": null,
    "allowTargetBlank": false,
    "allowText": false,
    "repeat": false
  }
}
```

### Structure of an `index.tsx`

```tsx
import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/components/RichText";

/**
 * Props for `<PascalCaseName>`.
 */
export type <PascalCaseName>Props = SliceComponentProps<Content.<PascalCaseName>Slice>;

/**
 * Component for "<PascalCaseName>" Slices.
 */
const <PascalCaseName>: FC<<PascalCaseName>Props> = ({ slice }) => {
  /**
   * <Variation 1 Name>
   */
  if (slice.variation === "<variation1Id>") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="<Tailwind classes>"
      >
        {/* render */}
      </section>
    );
  }

  /**
   * <Variation 2 Name>
   */
  if (slice.variation === "<variation2Id>") {
    // ...
  }
};

export default <PascalCaseName>;
```

### Rendering rules

- **Always** add `data-slice-type={slice.slice_type}` and `data-slice-variation={slice.variation}` on the root `<section>`
- **Always** use the guards `isFilled.image()`, `isFilled.richText()`, `isFilled.link()` before rendering a field
- Use `<PrismicNextImage>` for images (not `<img>`)
- Use the custom `<RichText>` component from `@/components/RichText` (not `PrismicRichText` directly)
- To customize the rendering of a paragraph or other element in a RichText, pass `components={{ paragraph: ({ children }) => <p className="...">{children}</p> }}`
- For full-screen background images: `<PrismicNextImage field={...} fill sizes="100vw" className="object-cover" />` inside a parent with `relative overflow-hidden`
- For auto-play videos: `<video src={...} autoPlay loop muted playsInline className="..." />`
- Containers: `max-w-7xl mx-auto px-6 md:px-12`
- The `<RichText>` component accepts an `additionalClassNames` prop to add classes without breaking the default style

### Naming recap

| Element | Convention | Example |
|---|---|---|
| Slice `id` (model.json) | snake_case | `hero_banner` |
| Slice `name` (model.json) | PascalCase | `HeroBanner` |
| Slice folder | PascalCase | `src/slices/HeroBanner/` |
| React component | PascalCase | `HeroBanner` |
| Variation `id` | camelCase | `imageWithText` |
| Variation `name` | Human readable | `"Image with text"` |
| Field `id` | snake_case | `background_image` |
| Field `label` | Title Case | `"Background Image"` |

### Slice registry (`src/slices/index.ts`)

This file is the **registry** that maps slice IDs to their React components. The Slice Simulator and the `SliceZone` component read it to know which component to render for each slice type. **Every new slice must be added here**, otherwise rendering fails with `Could not find a component for slice type "<id>"`.

Typical pattern (Next.js):

```ts
import dynamic from "next/dynamic";

export const components = {
  hero_banner: dynamic(() => import("./HeroBanner")),
  text_image: dynamic(() => import("./TextImage")),
  // add new slices here, keyed by snake_case id
};
```

Always read the existing file first to match its exact pattern before editing — some setups may use direct imports instead of `dynamic`.

---

## Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Prismic + Slice Machine
- **Prismic packages**:
  - `@prismicio/client` (types, `isFilled` helpers)
  - `@prismicio/react` (`SliceComponentProps`)
  - `@prismicio/next` (`PrismicNextImage`, `PrismicNextLink`)

## `images/` folder

The `images/` folder at the project root contains mockups/screenshots of slices to create. When the user says "create the slice from `images/hero-v2.png`", read this file as the starting point for step 1.