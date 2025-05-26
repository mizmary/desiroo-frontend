"use client"
import Logo from "@assets/Logo.svg"
import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

import styles from "./main.module.scss"
import { uiText } from "./uiText.ts"
import { AuthForm } from "./ui/AuthForm.tsx/index.tsx"
import { IAuthForm } from "./types.ts"
import { authService } from "./api/auth.api.ts"

import { QUERY_KEY, ROUTS } from "@/constants.ts"

export function Auth() {
  const methods = useForm<IAuthForm>({
    mode: "onChange"
  })
  const { reset, handleSubmit } = methods
  const [isLoginForm, setIsLoginForm] = useState(true)
  const navigate = useNavigate()
  const pageText = isLoginForm ? uiText.page.login : uiText.page.register

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.auth],
    mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? "login" : "register", data),
    onSuccess(data) {
      localStorage.setItem("user", JSON.stringify(data.data.user))
      toast.success("Successfully login")
      reset()
      if (isLoginForm) navigate(ROUTS.profile)
      else navigate(ROUTS.onboarding)
    }
  })

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data)
  }

  return (
    <div className={styles["auth-page"]}>
      <div className={styles["auth-page__container"]}>
        <img
          src={Logo}
          alt="Desiroo logo"
          className={styles["auth-page__container__logo"]}
        />
        <div className={styles["auth-page__text"]}>
          <p className={styles["auth-page__text-header"]}>{pageText.title}</p>
          <p className={styles["auth-page__text-description"]}>{pageText.subtitle}</p>
        </div>
        <FormProvider {...methods}>
          <AuthForm
            type={isLoginForm ? "login" : "register"}
            onSubmit={handleSubmit(onSubmit)}
            setIsLoginForm={setIsLoginForm}
          />
        </FormProvider>
        <p className={styles["auth-page__container_switch-text"]}>
          {pageText.switchText.prompt}{" "}
          <span onClick={() => setIsLoginForm((prev) => !prev)}>{pageText.switchText.link}</span>
        </p>
      </div>
    </div>
  )
}
