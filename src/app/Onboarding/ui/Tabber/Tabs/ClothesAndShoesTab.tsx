import { Controller, useFormContext } from "react-hook-form"

import styles from "./main.module.scss"

import { MultiSelect } from "@/components/MultiSelect"
import { uiText } from "@/app/Onboarding/uiText"
import { clothingSizes, shoeSizes } from "@/__mocks__/sizes"

export const ClothesAndShoesTab = () => {
  const { control } = useFormContext()
  const componentText = uiText.tabs.clothesAndShoes.fields
  return (
    <div className={styles["tab"]}>
      <div className={styles["tab__form"]}>
        <Controller
          name="shirtSizes"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              label={componentText.clothes.label}
              helperText={componentText.clothes.hint}
              options={clothingSizes}
            />
          )}
        ></Controller>
        <Controller
          name="shoeSizes"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              label={componentText.shoes.label}
              helperText={componentText.shoes.hint}
              options={shoeSizes}
            />
          )}
        ></Controller>
      </div>
    </div>
  )
}
