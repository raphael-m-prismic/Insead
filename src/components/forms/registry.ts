import { FC } from "react";
import { StaticApplicationForm } from "@/components/forms/StaticApplicationForm";

export const FORM_REGISTRY: Record<string, FC> = {
  "application-form": StaticApplicationForm,
};
