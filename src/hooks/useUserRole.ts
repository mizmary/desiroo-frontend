import { IUser } from "@/types/auth.types"

type UserRole = "owner" | "guest"

export const useUserRole = (currentUser: IUser | null, ownerId: string): UserRole => {
  if (!currentUser) return "guest"
  if (currentUser.id === ownerId) return "owner"
  return "guest"
}
