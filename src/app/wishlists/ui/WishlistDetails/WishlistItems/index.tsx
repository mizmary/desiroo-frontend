import { useCallback, useState } from "react"

import styles from "./main.module.scss"
import { WishlistItemModal } from "../../modals/WishlistItemModal"
import { ListItemCard } from "../../ListItemCard"

import { Button } from "@/components/Button"
import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"
import { useWishlistItems, useCreateWishlistItem } from "@/app/wishlists/hooks/useWishlistItems"
import { uiText } from "@/app/wishlists/uiText"

export const WishlistItems = () => {
  const [isItemModalOpen, setItemModalOpen] = useState(false)
  const { selectedListId } = useSelectedList()
  const { data: wishlistItems } = useWishlistItems(selectedListId)
  const { mutate: createWishlistItem } = useCreateWishlistItem()
  const componentText = uiText.wishlistDetails.items

  const handleOpenModal = useCallback(() => {
    setItemModalOpen(true)
  }, [])

  const sortedItems = [...(wishlistItems ?? [])].sort((a, b) => {
    return Number(a.isCompleted) - Number(b.isCompleted)
  })

  return (
    <>
      <div className={styles["items"]}>
        {wishlistItems?.length ? (
          sortedItems?.map((item) => (
            <ListItemCard
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <div className={styles["items__empty-list"]}>
            <p className={styles["items__empty-list--text"]}>{componentText.emptyList}</p>
            <Button
              rightIcon="add"
              onClick={handleOpenModal}
            >
              {componentText.addAction}
            </Button>
          </div>
        )}
      </div>
      <WishlistItemModal
        isOpen={isItemModalOpen}
        onClose={() => setItemModalOpen(false)}
        type={"create"}
        onSubmitForm={(data, wishlistId) => {
          createWishlistItem({ data, wishlistId })
        }}
      />
    </>
  )
}
