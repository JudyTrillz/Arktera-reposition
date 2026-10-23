import type { AssessmentFormData } from "@/lib/assessment-form";

export type StageProps = {
  data: AssessmentFormData;
  errors: Record<string, string>;
  updateField: <K extends keyof AssessmentFormData>(key: K, value: AssessmentFormData[K]) => void;
  toggleArrayValue: (key: keyof AssessmentFormData, value: string, max?: number) => void;
};
