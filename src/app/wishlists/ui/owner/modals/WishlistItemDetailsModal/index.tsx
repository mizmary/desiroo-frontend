import { useState } from "react"

import styles from "./main.module.scss"
import { ItemTag } from "../../../common/ItemTag"
import { ConfirmDeletionModal } from "../ConfirmDeletionModal"
import { WishlistItemEditorModal } from "../WishlistItemEditorModal"

import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"
import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"
import { Button } from "@/components/Button"
import { BaseModal } from "@/components/BaseModal"
import { uiText } from "@/app/wishlists/uiText"
import {
  useDeleteWishlistItem,
  useUpdateWishlistItem,
  useWishlistItem
} from "@/app/wishlists/hooks/useWishlistItems"

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const WishlistItemDetailsModal = (props: Props) => {
  const { isOpen, onClose } = props
  const [isItemModalOpen, setItemModalOpen] = useState(false)
  const [isConfirmDeletionModalOpen, setConfirmDeletionModalOpen] = useState(false)
  const { selectedListItemId } = useSelectedListItem()
  const { selectedListId } = useSelectedList()
  const { data: item } = useWishlistItem(selectedListId, selectedListItemId)
  const { mutate: updateWishlistItem } = useUpdateWishlistItem()
  const { mutate: deleteWishlistItem } = useDeleteWishlistItem()
  const modalText = uiText.modals.wishlistItemDetails
  const modalTitle = `${modalText.elementInfo.title} ${item?.title}`

  const handleEditItem = () => {
    setItemModalOpen(true)
  }

  const handleDeleteItem = () => {
    setConfirmDeletionModalOpen(true)
  }

  if (!isOpen || !item) return null

  return (
    <>
      <BaseModal
        isOpen
        onClose={onClose}
        maxWidth="60rem"
      >
        <h2 className={styles["modal__title"]}>{modalTitle}</h2>
        <div className={styles["modal__details"]}>
          <div className={styles["modal__details-info"]}>
            <h4 className={styles["modal__details-info-title"]}>
              {modalText.elementInfo.description.title}
            </h4>
            <p className={styles["modal__details-info-text"]}>
              {item?.description ? item.description : modalText.elementInfo.description.emptyField}
            </p>
          </div>
          <div className={styles["modal__details-info"]}>
            <h4 className={styles["modal__details-info-title"]}>
              {modalText.elementInfo.link.title}
            </h4>
            {item.link ? (
              <a
                className={styles["modal__details-info-text"]}
                href={item.link}
                target="_blank"
              >
                {item.link}
              </a>
            ) : (
              <p className={styles["modal__details-info-text"]}>
                {modalText.elementInfo.link.emptyField}
              </p>
            )}
          </div>
          <div className={styles["modal__details-info"]}>
            <h4 className={styles["modal__details-info-title"]}>
              {modalText.elementInfo.priceRange}
            </h4>
            <ItemTag
              type="price"
              value={item.priceRange}
            ></ItemTag>
          </div>
          <div className={styles["modal__details-info"]}>
            <h4 className={styles["modal__details-info-title"]}>
              {modalText.elementInfo.priority}
            </h4>
            <ItemTag
              type="priority"
              value={item.priority}
            ></ItemTag>
          </div>
        </div>
        <div className={styles["modal__actions"]}>
          <Button
            onClick={handleEditItem}
            rightIcon="edit"
          >
            {modalText.actions.edit}
          </Button>
          <Button
            color="danger"
            rightIcon="delete"
            onClick={handleDeleteItem}
          >
            {modalText.actions.delete}
          </Button>
          <Button
            variant="tertiary"
            onClick={onClose}
          >
            {modalText.actions.close}
          </Button>
        </div>
      </BaseModal>
      <WishlistItemEditorModal
        type="edit"
        defaultValues={item}
        isOpen={isItemModalOpen}
        onClose={() => {
          setItemModalOpen(false)
        }}
        onSubmitForm={(data, wishlistId, itemId) =>
          updateWishlistItem({ data, wishlistId, itemId })
        }
      />
      <ConfirmDeletionModal
        isOpen={isConfirmDeletionModalOpen}
        onClose={() => {
          setConfirmDeletionModalOpen(false)
          onClose()
        }}
        type="element"
        name={item.title}
        deleteFn={deleteWishlistItem}
      />
    </>
  )
}
