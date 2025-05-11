import styles from "./main.module.scss"
import { ItemTag } from "../../../common/ItemTag"

import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"
import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"
import { BaseModal } from "@/components/BaseModal"
import { uiText } from "@/app/wishlists/uiText"
import { useWishlistItem } from "@/app/wishlists/hooks/useWishlistItems"
import { Button } from "@/components/Button"

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const WishlistItemDetailsModal = (props: Props) => {
  const { isOpen, onClose } = props

  const { selectedListItemId } = useSelectedListItem()
  const { selectedListId } = useSelectedList()

  const { data: item } = useWishlistItem(selectedListId, selectedListItemId)

  const modalText = uiText.modals.wishlistItemDetails
  const modalTitle = `${modalText.elementInfo.title} ${item?.title}`

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
            variant="tertiary"
            onClick={onClose}
          >
            {modalText.actions.close}
          </Button>
        </div>
      </BaseModal>
    </>
  )
}
