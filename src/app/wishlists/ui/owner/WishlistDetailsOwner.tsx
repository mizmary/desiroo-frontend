import { useCallback, useState } from "react"

import { useCreateWishlistItem } from "../../hooks/useWishlistItems"
import { useDeleteWishlist, useUpdateWishlist, useWishlistById } from "../../hooks/useWishlists"
import { useSelectedList } from "../../utils/SelectedListContext"
import { uiText } from "../../uiText"
import { WishlistItemsOwner } from "./WishlistItemsOwner"
import { ConfirmDeletionModal } from "./modals/ConfirmDeletionModal"
import styles from "../common/styles/wishlistDetails.module.scss"
import { WishlistEditorModal } from "./modals/WishlistEditorModal"
import { WishlistItemEditorModal } from "./modals/WishlistItemEditorModal"

import { IconButton } from "@/components/IconButton"

export const WishlistDetailsOwner = () => {
  const { selectedListId } = useSelectedList()

  const { data: wishlist } = useWishlistById(selectedListId)
  const { mutate: createWishlistItem } = useCreateWishlistItem()
  const { mutate: updateWishlist } = useUpdateWishlist()
  const { mutate: deleteWishlist } = useDeleteWishlist()

  const [isCreateWishlistItemModalOpen, setCreateWishlistItemModalOpen] = useState(false)
  const [isEditWishlistModalOpen, setEditWishlistModalOpen] = useState(false)
  const [isConfirmDeletionModalOpen, setConfirmDeletionModalOpen] = useState(false)

  const wishlistTitle = wishlist?.title
  const componentText = uiText.wishlistDetails

  const handleOpenModal = useCallback(() => {
    setCreateWishlistItemModalOpen(true)
  }, [])

  const handleDeleteList = () => {
    setConfirmDeletionModalOpen(true)
  }

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
        <div className={styles["wishlist-details__menu-actions"]}>
          <IconButton
            icon="add"
            size="small"
            onClick={handleOpenModal}
          />
          <IconButton
            icon="edit"
            variant="secondary"
            size="small"
            onClick={() => setEditWishlistModalOpen(true)}
          />
          <IconButton
            icon="delete"
            variant="secondary"
            color="danger"
            size="small"
            onClick={handleDeleteList}
          />
        </div>
      </div>
      <WishlistItemsOwner />
      <WishlistItemEditorModal
        type={"create"}
        isOpen={isCreateWishlistItemModalOpen}
        onClose={() => setCreateWishlistItemModalOpen(false)}
        onSubmitForm={(data, wishlistId) => {
          createWishlistItem({ data, wishlistId })
        }}
      />
      <WishlistEditorModal
        type="edit"
        isOpen={isEditWishlistModalOpen}
        onClose={() => setEditWishlistModalOpen(false)}
        defaultValues={wishlist!}
        onSubmitForm={(data, wishlistId) => {
          updateWishlist({ data, wishlistId })
        }}
      />
      {wishlist && (
        <ConfirmDeletionModal
          type="list"
          isOpen={isConfirmDeletionModalOpen}
          name={wishlist.title}
          onClose={() => setConfirmDeletionModalOpen(false)}
          deleteFn={deleteWishlist}
        />
      )}
    </div>
  )
}
