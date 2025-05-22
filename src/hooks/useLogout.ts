import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"

import { authService } from "@/app/auth/api/auth.api"
import { ROUTS } from "@/constants"

export const useLogout = () => {
  const navigate = useNavigate()

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

  return { logout, isLoggingOut: isPending }
}
