import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"

import { authService } from "@/app/auth/api/auth.api"
import { ROUTS } from "@/constants"
import { IUser } from "@/app/auth/types"

export const useUser = () => {
  const navigate = useNavigate()
  const storedUser = localStorage.getItem("user")

  useEffect(() => {
    if (!storedUser) {
      toast.warning("Нужно авторизоваться для этого действия")
      navigate(ROUTS.auth)
    }
  }, [storedUser, navigate])

  const { mutate: logout, isPending } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      localStorage.removeItem("user")
      navigate(ROUTS.auth)
    },
    onError: () => {
      localStorage.removeItem("user")
      navigate(ROUTS.auth)
    }
  })

  if (!storedUser) throw new Error("Redirecting to /auth")

  const user: IUser = JSON.parse(storedUser)

  return {
    user,
    logout,
    isLoggingOut: isPending
  }
}
