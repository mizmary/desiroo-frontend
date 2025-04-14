import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { IAuthForm } from "@/types/auth.types"
import { UseFormRegister } from "react-hook-form"
import styles from "./main.module.scss"

type Props = {
  type: "register" | "login"
  register: UseFormRegister<IAuthForm>
  onSubmit: React.FormEventHandler<HTMLFormElement>
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>
}

const isRegisterType = (type: "register" | "login") => {
  return type === "register"
}

export const AuthForm = ({ type, register, onSubmit, setIsLoginForm }: Props) => {
  const isRegister = isRegisterType(type)
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.header}>
          {isRegister ? "Добро пожаловать в мир желаний!" : "Время исполнить свои желания!"}
        </p>
        <p className={styles.description}>
          {isRegister
            ? "Создайте аккаунт и сделайте подготовку к праздникам проще."
            : "Введите свои данные, чтобы вернуться к своим спискам."}
        </p>
      </div>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <Input
          type="email"
          label="Email"
          placeholder="Введите ваш email"
          {...register("email")}
        />
        <Input
          type="password"
          label="Пароль"
          placeholder="Введите ваш пароль"
          {...register("password")}
        />
        <Button
          className={styles.button}
          children={isRegisterType(type) ? "Создать аккаунт" : "Войти"}
          size="large"
          rightIcon="arrow_right_alt"
          onClick={() => {
            setIsLoginForm(!isRegisterType(type))
          }}
        />
      </form>
    </div>
  )
}
