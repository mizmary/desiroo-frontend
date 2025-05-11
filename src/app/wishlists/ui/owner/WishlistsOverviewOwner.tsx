import { useState, useCallback } from "react"

import styles from "../common/styles/wishlistOverview.module.scss"
import { useCreateWishlist, useWishlists } from "../../hooks/useWishlists"
import { uiText } from "../../uiText"
import { useSelectedList } from "../../utils/SelectedListContext"
import { WishlistEditorModal } from "./modals/WishlistEditorModal"
import { TWishlist } from "../../types"
import { ListCard } from "../common/ListCard"

import { Button } from "@/components/Button"

const getAcquiredPercentage = (wishlist: TWishlist) => {
  if (wishlist.items.length === 0) return 0
  const completedCount = wishlist.items.filter((item) => item.isCompleted).length
  return Math.round((completedCount / wishlist.items.length) * 100)
}

const geItemsCount = (wishlist: TWishlist) => {
  return `${wishlist.items.length}`
}

export const WishlistsOverviewOwner = () => {
  const { data: wishlists } = useWishlists()
  const { mutate: createWishlist } = useCreateWishlist()

  const { setSelectedListId } = useSelectedList()

  const [isCreateWishlistModalOpen, setCreateWishlistModalOpen] = useState(false)

  const componentText = uiText.wishlistsOverview.owner

  const handleOpenModal = useCallback(() => {
    setCreateWishlistModalOpen(true)
  }, [])

  if (!wishlists || wishlists.length === 0) {
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
        <WishlistEditorModal
          type={"create"}
          onSubmitForm={createWishlist}
          isOpen={isCreateWishlistModalOpen}
          onClose={() => setCreateWishlistModalOpen(false)}
        />
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
      <Button
        variant="secondary"
        rightIcon="add"
        onClick={handleOpenModal}
        className={styles["wishlist-overview__add-button"]}
      >
        {componentText.addListAction}
      </Button>
      <WishlistEditorModal
        type={"create"}
        onSubmitForm={createWishlist}
        isOpen={isCreateWishlistModalOpen}
        onClose={() => setCreateWishlistModalOpen(false)}
      />
    </div>
  )
}
