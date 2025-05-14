import { ItemCardWithStatus } from "./ItemCardWithStatus"
import { ItemCard } from "./ItemCard"

import { TWishlistItem } from "@/app/wishlists/types"
import { useUser } from "@/hooks/useUser"

type Props = {
  item: TWishlistItem
}

export const ListItemCardGuest = (props: Props) => {
  const { item } = props
  const { isCompleted, reserveUserId } = item
  const { user } = useUser()
  const currentUser = user.id
  const isMyReserve = currentUser === reserveUserId

  if (isCompleted || (reserveUserId && !isMyReserve)) return <ItemCardWithStatus item={item} />

  if (isMyReserve)
    return (
      <ItemCardWithStatus
        item={item}
        isMyReservation
      />
    )

  return <ItemCard item={item} />
}
