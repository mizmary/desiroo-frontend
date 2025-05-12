import { ItemCardWithReservation } from "./ItemCardWithReservation"
import { ItemCardEnabled } from "./ItemCardEnabled"

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

  if (isCompleted) return "completed item"

  if (reserveUserId && !isMyReserve)
    return (
      <ItemCardWithReservation
        item={item}
        isMyReservation={false}
      />
    )

  if (isMyReserve)
    return (
      <ItemCardWithReservation
        item={item}
        isMyReservation
      />
    )

  return <ItemCardEnabled item={item} />
}
