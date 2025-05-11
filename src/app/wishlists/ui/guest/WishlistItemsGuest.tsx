import { useWishlistItems } from "../../hooks/useWishlistItems"
import { uiText } from "../../uiText"
import { useSelectedList } from "../../utils/SelectedListContext"
import styles from "../common/styles/wishlistItems.module.scss"
import { ListItemCardGuest } from "./ListItemCardGuest"

export const WishlistItemsGuest = () => {
  const { selectedListId } = useSelectedList()

  const { data: wishlistItems } = useWishlistItems(selectedListId)

  const componentText = uiText.wishlistDetails.guest

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className={styles["items"]}>
        <div className={styles["items__empty-list"]}>
          <p className={styles["items__empty-list--text"]}>{componentText.emptyList}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles["items"]}>
      {wishlistItems?.map((item) => (
        <ListItemCardGuest
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}
