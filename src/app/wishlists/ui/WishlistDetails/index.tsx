import { useCallback, useState } from "react"

import { useCreateWishlistItem } from "../../hooks/useWishlistItems"
import { useSelectedList } from "../../utils/SelectedListContext"
import styles from "./main.module.scss"
import { WishlistItemModal } from "../modals/WishlistItemModal"
import { WishlistModal } from "../modals/WishlistModal"
import { ConfirmDeletionModal } from "../modals/ConfirmDeletionModal"
import { WishlistItems } from "./WishlistItems"
import { useDeleteWishlist, useUpdateWishlist, useWishlistById } from "../../hooks/useWishlists"
import { uiText } from "../../uiText"

import { IconButton } from "@/components/IconButton"

export const WishlistDetails = () => {
  const { selectedListId } = useSelectedList()
  const [isCreateWishlistItemModalOpen, setCreateWishlistItemModalOpen] = useState(false)
  const [isEditWishlistModalOpen, setEditWishlistModalOpen] = useState(false)
  const [isConfirmDeletionModalOpen, setConfirmDeletionModalOpen] = useState(false)
  const { data: wishlist } = useWishlistById(selectedListId)
  const { mutate: deleteWishlist } = useDeleteWishlist()
  const { mutate: updateWishlist } = useUpdateWishlist()
  const { mutate: createWishlistItem } = useCreateWishlistItem()
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
      <WishlistItems />
      <WishlistItemModal
        isOpen={isCreateWishlistItemModalOpen}
        onClose={() => setCreateWishlistItemModalOpen(false)}
        type={"create"}
        onSubmitForm={(data, wishlistId) => {
          createWishlistItem({ data, wishlistId })
        }}
      />
      <WishlistModal
        isOpen={isEditWishlistModalOpen}
        onClose={() => setEditWishlistModalOpen(false)}
        type="edit"
        defaultValues={wishlist!}
        onSubmitForm={(data, wishlistId) => {
          updateWishlist({ data, wishlistId })
        }}
      />
      {wishlist && (
        <ConfirmDeletionModal
          isOpen={isConfirmDeletionModalOpen}
          type="list"
          name={wishlist.title}
          onClose={() => setConfirmDeletionModalOpen(false)}
          deleteFn={deleteWishlist}
        />
      )}
    </div>
  )
}
