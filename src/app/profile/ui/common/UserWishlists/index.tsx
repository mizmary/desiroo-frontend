import { useNavigate } from "react-router"

import styles from "./main.module.scss"
import { ListCard } from "../ListCard"

import { uiText } from "@/app/profile/uiText"
import { TWishlist } from "@/app/wishlists/types"
import { Button } from "@/components/Button"
type Props = {
  title: string
  lists: TWishlist[]
  onNavigateToWishlists: () => void
  selectedListPath: string
}

export const UserWishlists = (props: Props) => {
  const { title, lists, onNavigateToWishlists, selectedListPath } = props
  const buttonText = uiText.lists.toListsAction
  const emptyStateText = uiText.lists.emptyState
  const navigate = useNavigate()

  const geItemsCount = (wishlist: TWishlist) => {
    return `${wishlist.items.length}`
  }

  const getAcquiredPercentage = (wishlist: TWishlist) => {
    if (wishlist.items.length === 0) return 0
    const completedCount = wishlist.items.filter((item) => item.isCompleted).length
    return Math.round((completedCount / wishlist.items.length) * 100)
  }

  return (
    <div className={styles["userWishlists"]}>
      <div className={styles["userWishlists__header"]}>
        <span className={styles["userWishlists__header--title"]}>{title}</span>
        <Button
          size="small"
          variant="tertiary"
          rightIcon="arrow_right_alt"
          onClick={onNavigateToWishlists}
        >
          {buttonText}
        </Button>
      </div>
      <div className={styles["userWishlists__lists"]}>
        {lists?.length === 0 && (
          <div className={styles["userWishlists__lists--emptyState"]}>{emptyStateText}</div>
        )}
        {lists?.length > 0 && (
          <div className={styles["userWishlists__lists--fulfilled"]}>
            {lists.map((wishlist) => {
              const acquiredPercentage = getAcquiredPercentage(wishlist)
              return (
                <ListCard
                  key={wishlist.title}
                  title={wishlist.title}
                  accessLevel={wishlist.accessLevel}
                  itemCount={geItemsCount(wishlist)}
                  acquiredPercentage={acquiredPercentage}
                  onClick={() => navigate(`${selectedListPath}?selected=${wishlist.id}`)}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
