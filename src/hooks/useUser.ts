import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"

import { authService } from "@/app/auth/api/auth.api"
import { ROUTS } from "@/constants"

export const useUser = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  useEffect(() => {
    if (!user) {
      toast.warning("Нужно авторизоваться для этого действия")
      navigate(ROUTS.auth)
    }
  }, [user, navigate])

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

  if (!user) throw new Error("Redirecting to /auth")

  return {
    user,
    logout,
    isLoggingOut: isPending
  }
}
