import clsx from "clsx"
import { useState } from "react"

import styles from "./main.module.scss"
import { ItemTag } from "../ItemTag"
import { useSelectedList } from "../../utils/SelectedListContext"
import { useSelectedListItem } from "../../utils/SelectedListItemContext"
import { WishlistItemDetailsModal } from "../modals/WishlistItemDetailsModal"

import { TWishlistItem } from "@/app/wishlists/types"
import { useUpdateWishlistItem } from "@/app/wishlists/hooks/useWishlistItems"
import { Button } from "@/components/Button"

type Props = {
  item: TWishlistItem
}

export const ListItemCard = (props: Props) => {
  const { item } = props
  const { title, priceRange, priority, isCompleted, id } = item
  const [completed, setCompleted] = useState(isCompleted)
  const { mutate: updateWishlistItem } = useUpdateWishlistItem()
  const { selectedListId } = useSelectedList()
  const { setSelectedListItemId } = useSelectedListItem()
  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

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
          <div className={styles["list-item-card__info-tags"]}>
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
