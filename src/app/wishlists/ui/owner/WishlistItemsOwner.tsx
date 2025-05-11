import { useCallback, useState } from "react"

import { useWishlistItems, useCreateWishlistItem } from "../../hooks/useWishlistItems"
import { uiText } from "../../uiText"
import { useSelectedList } from "../../utils/SelectedListContext"
import { ListItemCardOwner } from "./ListItemCardOwner"
import { WishlistItemEditorModal } from "./modals/WishlistItemEditorModal"
import styles from "../common/styles/wishlistItems.module.scss"

import { Button } from "@/components/Button"

export const WishlistItemsOwner = () => {
  const { selectedListId } = useSelectedList()

  const { data: wishlistItems } = useWishlistItems(selectedListId)
  const { mutate: createWishlistItem } = useCreateWishlistItem()

  const [isItemModalOpen, setItemModalOpen] = useState(false)

  const componentText = uiText.wishlistDetails.owner

  const handleOpenModal = useCallback(() => {
    setItemModalOpen(true)
  }, [])

  const sortedItems = [...(wishlistItems ?? [])].sort((a, b) => {
    return Number(a.isCompleted) - Number(b.isCompleted)
  })

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <>
        <div className={styles["items"]}>
          <div className={styles["items__empty-list"]}>
            <p className={styles["items__empty-list--text"]}>{componentText.emptyList}</p>
            <Button
              rightIcon="add"
              onClick={handleOpenModal}
            >
              {componentText.addAction}
            </Button>
          </div>
        </div>
        <WishlistItemEditorModal
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

  return (
    <div className={styles["items"]}>
      {sortedItems?.map((item) => (
        <ListItemCardOwner
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}
