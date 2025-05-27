import { FormProvider, useForm } from "react-hook-form"

import { TypeUserForm } from "../auth/types"
import styles from "./main.module.scss"
import { Tabber } from "./ui/Tabber"
import { uiText } from "./uiText"

export const Onboarding = () => {
  const methods = useForm<TypeUserForm>()

  const pageText = uiText
  return (
    <div className={styles["onboarding-page"]}>
      <div className={styles["onboarding-page__container"]}>
        <div className={styles["onboarding-page__text"]}>
          <p className={styles["onboarding-page__text-header"]}>{pageText.title}</p>
          <p className={styles["onboarding-page__text-description"]}>{pageText.subtitle}</p>
        </div>
        <FormProvider {...methods}>
          <Tabber />
        </FormProvider>
      </div>
    </div>
  )
}
