import { Controller, useFormContext } from "react-hook-form"

import styles from "./main.module.scss"

import { MultiSelect } from "@/components/MultiSelect"
import { uiText } from "@/app/Onboarding/uiText"
import { braceletSizes, necklaceLengths, ringSizes } from "@/__mocks__/sizes"

export const JewellersTab = () => {
  const { control } = useFormContext()
  const componentText = uiText.tabs.jewellers.fields
  return (
    <div className={styles["tab"]}>
      <div className={styles["tab__form"]}>
        <Controller
          name="ringSizes"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              label={componentText.rings.label}
              helperText={componentText.rings.hint}
              options={ringSizes}
            />
          )}
        ></Controller>
        <Controller
          name="braceletSizes"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              label={componentText.bracelets.label}
              helperText={componentText.bracelets.hint}
              options={braceletSizes}
            />
          )}
        ></Controller>
        <Controller
          name="necklaceSizes"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              label={componentText.neckless.label}
              helperText={componentText.neckless.hint}
              options={necklaceLengths}
            />
          )}
        ></Controller>
      </div>
    </div>
  )
}
