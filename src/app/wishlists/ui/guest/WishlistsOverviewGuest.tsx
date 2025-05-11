import styles from "../common/styles/wishlistOverview.module.scss"
import { useWishlistsByUserId } from "../../hooks/useWishlists"
import { uiText } from "../../uiText"
import { useSelectedList } from "../../utils/SelectedListContext"
import { TWishlist } from "../../types"
import { ListCard } from "../common/ListCard"

const getAcquiredPercentage = (wishlist: TWishlist) => {
  if (wishlist.items.length === 0) return 0
  const completedCount = wishlist.items.filter((item) => item.isCompleted).length
  return Math.round((completedCount / wishlist.items.length) * 100)
}

const geItemsCount = (wishlist: TWishlist) => {
  return `${wishlist.items.length}`
}

type Props = {
  userId: string
}

export const WishlistsOverviewGuest = ({ userId }: Props) => {
  const { data: wishlists } = useWishlistsByUserId(userId)

  const { setSelectedListId } = useSelectedList()

  const componentText = uiText.wishlistsOverview.guest

  if (!wishlists || wishlists.length === 0) {
    return (
      <>
        <div className={styles["wishlist-overview"]}>
          <div className={styles["wishlist-overview__empty-list"]}>
            <p className={styles["wishlist-overview__empty-list-text"]}>
              {componentText.emptyListText}
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={styles["wishlist-overview"]}>
      <div className={styles["wishlist-overview__lists"]}>
        {wishlists.map((wishlist) => {
          const handleSelectWishlist = () => setSelectedListId(wishlist.id)
          const acquiredPercentage = getAcquiredPercentage(wishlist)
          return (
            <ListCard
              key={wishlist.title}
              title={wishlist.title}
              wishlistId={wishlist.id}
              accessLevel={wishlist.accessLevel}
              onClick={handleSelectWishlist}
              itemCount={geItemsCount(wishlist)}
              acquiredPercentage={acquiredPercentage}
            />
          )
        })}
      </div>
    </div>
  )
}
