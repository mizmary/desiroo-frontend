import { useEffect } from "react"
import { useSearchParams } from "react-router"

import { useWishlistByUserId } from "../../hooks/useWishlists"
import { uiText } from "../../uiText"
import { useSelectedList } from "../../utils/SelectedListContext"
import { WishlistItemsGuest } from "./WishlistItemsGuest"
import styles from "../common/styles/wishlistDetails.module.scss"

type Props = {
  userId: string
}

export const WishlistDetailsGuest = ({ userId }: Props) => {
  const [searchParams] = useSearchParams()
  const selectedId = searchParams.get("selected")
  const { selectedListId, setSelectedListId } = useSelectedList()

  useEffect(() => {
    if (selectedId) {
      setSelectedListId(selectedId)
    }
  }, [selectedId])

  const { data: wishlist } = useWishlistByUserId(userId, selectedListId)

  const wishlistTitle = wishlist?.title
  const componentText = uiText.wishlistDetails

  if (selectedListId === "") {
    return (
      <div className={styles["wishlist-details"]}>
        <p className={styles["wishlist-details__empty-list"]}>{componentText.nonSelectedList}</p>
      </div>
    )
  }

  return (
    <div className={styles["wishlist-details"]}>
      <div className={styles["wishlist-details__menu"]}>
        <p className={styles["wishlist-details__menu-title"]}>{wishlistTitle}</p>
      </div>
      <WishlistItemsGuest />
    </div>
  )
}
