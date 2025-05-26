import { Controller, useFormContext } from "react-hook-form"
import { useState } from "react"

import styles from "./main.module.scss"
import { AvatarModal } from "../../AvatarModal"

import { Input } from "@/components/Input"
import { uiText } from "@/app/Onboarding/uiText"
import { Button } from "@/components/Button"
import { MultiSelect } from "@/components/MultiSelect"
import { profileTags } from "@/__mocks__/tags"

export const GeneralInfoTab = () => {
  const { register, control, setValue, watch } = useFormContext()
  const componentText = uiText.tabs.generalInfo

  const [isModalOpen, setModalOpen] = useState(false)
  const avatar = watch("avatar")

  return (
    <>
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
            <input
              type="hidden"
              {...register("avatar")}
            />
            <Button
              size="medium"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            >
              {componentText.choseButton}
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <AvatarModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          initialValue={avatar}
          onSelect={(fileName) => setValue("avatar", fileName)}
        />
      )}
    </>
  )
}
