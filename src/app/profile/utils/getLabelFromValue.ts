import { uiText } from "../uiText"

export const getLabelsByValues = (
  options: { label: string; value: string }[],
  values: string[] | undefined | null
): string => {
  if (!values || values.length === 0) {
    return uiText.details.infoSections.emptyField
  }

  const labels = values
    .map((value) => options.find((option) => option.value === value)?.label)
    .filter(Boolean)

  return labels.length > 0 ? labels.join(", ") : uiText.details.infoSections.emptyField
}
