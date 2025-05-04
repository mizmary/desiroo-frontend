"use client"
import { toast } from "sonner"
import { useState } from "react"
import Logo from "@assets/Logo.svg"
import styles from "./main.module.scss"
import { IAuthForm } from "@/types/auth.types"
import { useMutation } from "@tanstack/react-query"
import { authService } from "@/services/auth.service"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { QUERY_KEY, ROUTS } from "@/constants"
import { AuthForm } from "./AuthForm.tsx"
import clsx from "clsx"

export function Auth() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: "onChange"
  })

  const [isLoginForm, setIsLoginForm] = useState(true)

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.auth],
    mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? "login" : "register", data),
    onSuccess(data) {
      localStorage.setItem("user", JSON.stringify(data.data.user))
      toast.success("Successfully login")
      reset()
      navigate(ROUTS.lists)
    }
  })

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data)
  }

  return (
    <div className={styles.body}>
      <div className={clsx(styles.container)}>
        <img
          src={Logo}
          alt="Desiroo logo"
          className={styles.logo}
        />
        <AuthForm
          type={isLoginForm ? "login" : "register"}
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          setIsLoginForm={setIsLoginForm}
        />
        <p className={styles.switchText}>
          {isLoginForm ? (
            <>
              Новый пользователь? <span onClick={() => setIsLoginForm(false)}>Регистрация</span>
            </>
          ) : (
            <>
              Уже с нами? <span onClick={() => setIsLoginForm(true)}>Войти</span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
