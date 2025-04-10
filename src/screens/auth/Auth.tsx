import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { authService } from "@/services/auth.service"
import { IAuthForm } from "@/types/auth.types"

export function Auth() {
  // const { register, handleSubmit, reset } = useForm<IAuthForm>({
  //   mode: "onChange"
  // })

  // const [isLoginForm, setIsLoginForm] = useState(false)
  // const { mutate } = useMutation({
  //   mutationKey: ["auth"],
  //   mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? "login" : "register", data),
  //   onSuccess() {
  //     //TODO: alert о успешной авторизации
  //     reset()
  //     //TODO: переход на главную страницу
  //   }
  // })

  // const onSubmit: SubmitHandler<IAuthForm> = (data) => {
  //   mutate(data)
  // }

  return <div>Auth</div>
}
