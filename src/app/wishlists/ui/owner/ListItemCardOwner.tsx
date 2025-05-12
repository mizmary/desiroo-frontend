import { useState } from "react"
import { clsx } from "clsx"

import { useUpdateWishlistItem } from "../../hooks/useWishlistItems"
import { TWishlistItem } from "../../types"
import { useSelectedList } from "../../utils/SelectedListContext"
import { useSelectedListItem } from "../../utils/SelectedListItemContext"
import styles from "./listItemCard.module.scss"
import { ItemTag } from "../common/ItemTag"
import { WishlistItemDetailsModal } from "./modals/WishlistItemDetailsModal"

import { Button } from "@/components/Button"

type Props = {
  item: TWishlistItem
}

export const ListItemCardOwner = (props: Props) => {
  const { item } = props
  const { title, priceRange, priority, isCompleted, id } = item

  const [completed, setCompleted] = useState(isCompleted)
  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

  const { selectedListId } = useSelectedList()
  const { setSelectedListItemId } = useSelectedListItem()

  const { mutate: updateWishlistItem } = useUpdateWishlistItem()

  const handleCheckboxToggle = () => {
    const newValue = !completed
    setCompleted(newValue)
    updateWishlistItem({
      data: { isCompleted: newValue },
      wishlistId: selectedListId,
      itemId: id
    })
  }

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setItemDetailsModalOpen(true)
  }

  const checkboxIconClass = clsx(
    "material-symbols-outlined",
    styles["list-item-card__control-checkbox"]
  )

  const titleClass = clsx(
    styles["list-item-card__control-title"],
    completed && styles["list-item-card__control-title-completed"]
  )

  return (
    <>
      <div className={styles["list-item-card"]}>
        <div className={styles["list-item-card__control"]}>
          <span
            className={checkboxIconClass}
            onClick={handleCheckboxToggle}
          >
            {completed ? "check_box" : "check_box_outline_blank"}
          </span>
          <p className={titleClass}>{title}</p>
        </div>
        <div className={styles["list-item-card__info"]}>
          <div className={styles["list-item-card__info-group"]}>
            <ItemTag
              type="price"
              value={priceRange}
            />
            <ItemTag
              type="priority"
              value={priority}
            />
          </div>
          <Button
            children="Показать детали"
            size="small"
            rightIcon="expand_content"
            onClick={handleViewDetails}
          />
        </div>
      </div>
      <WishlistItemDetailsModal
        isOpen={isItemDetailsModalOpen}
        onClose={() => {
          setItemDetailsModalOpen(false)
          setSelectedListItemId("")
        }}
      />
    </>
  )
}
