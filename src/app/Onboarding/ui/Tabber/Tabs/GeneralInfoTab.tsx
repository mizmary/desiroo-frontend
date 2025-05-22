import { Controller, useFormContext } from "react-hook-form"

import styles from "./main.module.scss"

import { Input } from "@/components/Input"
import { uiText } from "@/app/Onboarding/uiText"
import { Button } from "@/components/Button"
import { MultiSelect } from "@/components/MultiSelect"
import { profileTags } from "@/__mocks__/tags"

export const GeneralInfoTab = () => {
  const { register, control } = useFormContext()
  const componentText = uiText.tabs.generalInfo
  return (
    <div className={styles["tab"]}>
      <div className={styles["tab__form"]}>
        <Input
          label={componentText.fields.bio}
          {...register("bio")}
        />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              label={componentText.fields.interests}
              options={profileTags}
            />
          )}
        ></Controller>
        <div className={styles["tab__form--avatar"]}>
          <span>{componentText.fields.avatar}</span>
          <Button
            size="medium"
            variant="secondary"
          >
            {componentText.choseButton}
          </Button>
        </div>
      </div>
    </div>
  )
}
