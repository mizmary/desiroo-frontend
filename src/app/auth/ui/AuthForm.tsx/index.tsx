import { useFormContext } from "react-hook-form"

import styles from "./main.module.scss"
import { uiText } from "../../uiText"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

type Props = {
  type: "register" | "login"
  onSubmit: React.FormEventHandler<HTMLFormElement>
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthForm = (props: Props) => {
  const { type, onSubmit, setIsLoginForm } = props
  const { register } = useFormContext()
  const isRegister = type === "register"
  const componentText = isRegister ? uiText.authFormRegister : uiText.authFormLogin

  return (
    <form
      className={styles["auth-form"]}
      onSubmit={onSubmit}
    >
      <Input
        type="email"
        label={componentText.emailLabel}
        placeholder={componentText.emailPlaceholder}
        {...register("email")}
      />
      <Input
        type="password"
        label={componentText.passwordLabel}
        placeholder={componentText.passwordPlaceholder}
        {...register("password")}
      />
      {isRegister && (
        <Input
          type="name"
          label={(componentText as typeof uiText.authFormRegister).nameLabel}
          placeholder={(componentText as typeof uiText.authFormRegister).namePlaceholder}
          {...register("name")}
        />
      )}
      <Button
        size="large"
        rightIcon="arrow_right_alt"
        children={componentText.submitButton}
        className={styles["auth-form__button"]}
        onClick={() => {
          setIsLoginForm(!isRegister)
        }}
      />
    </form>
  )
}
