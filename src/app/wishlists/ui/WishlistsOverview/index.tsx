import { useCallback, useState } from "react"

import { ListCard } from "../ListCard"
import styles from "./main.module.scss"
import { WishlistModal } from "../modals/WishlistModal"
import { useSelectedList } from "../../utils/SelectedListContext"
import { uiText } from "../../uiText"

import { Button } from "@/components/Button"
import { TWishlist } from "@/app/wishlists/types"
import { useCreateWishlist, useWishlists } from "@/app/wishlists/hooks/useWishlists"

export const WishlistsOverview = () => {
  const { mutate } = useCreateWishlist()
  const { data: wishlists } = useWishlists()
  const { setSelectedListId } = useSelectedList()
  const [isModalOpen, setModalOpen] = useState(false)
  const componentText = uiText.wishlistsOverview

  const getAcquiredPercentage = (wishlist: TWishlist) => {
    if (wishlist.items.length === 0) return 0

    const completedCount = wishlist.items.filter((item) => item.isCompleted).length
    return Math.round((completedCount / wishlist.items.length) * 100)
  }

  const geItemsCount = (wishlist: TWishlist) => {
    return `${wishlist.items.length}`
  }

  const handleOpenModal = useCallback(() => {
    setModalOpen(true)
  }, [])

  if (wishlists?.length) {
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
        <Button
          className={styles["wishlist-overview__add-button"]}
          rightIcon="add"
          variant="secondary"
          onClick={handleOpenModal}
        >
          {componentText.addListAction}
        </Button>
        <WishlistModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          type={"create"}
          onSubmitForm={mutate}
        />
      </div>
    )
  } else {
    return (
      <>
        <div className={styles["wishlist-overview"]}>
          <div className={styles["wishlist-overview__empty-list"]}>
            <p className={styles["wishlist-overview__empty-list-text"]}>
              {componentText.emptyList.text}
            </p>
            <Button
              className={styles["wishlist-overview__add-button"]}
              rightIcon="add"
              onClick={handleOpenModal}
            >
              {componentText.emptyList.action}
            </Button>
          </div>
        </div>
        <WishlistModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          type={"create"}
          onSubmitForm={mutate}
        />
      </>
    )
  }
}
