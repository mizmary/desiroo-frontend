import { IUser } from "@/app/auth/types"

export const useAuth = () => {
  const storedUser = localStorage.getItem("user")

  const user: IUser | null = storedUser ? JSON.parse(storedUser) : null

  return {
    user,
    isAuth: Boolean(user)
  }
}
