import { IUser } from "../auth/types"

export type FollowingPerson = {
  reservedCount: number
  completedWishesCount: number
} & IUser
