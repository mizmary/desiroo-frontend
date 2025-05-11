import { useState } from "react"

import { useSelectedListItem } from "../../utils/SelectedListItemContext"
import styles from "../common/styles/listCard.module.scss"
import { TWishlistItem } from "../../types"
import { ItemTag } from "../common/ItemTag"
import { WishlistItemDetailsModal } from "./modals/WishlistItemDetailsModal"

import { Button } from "@/components/Button"

type Props = {
  item: TWishlistItem
}
export const ListItemCardGuest = (props: Props) => {
  const { item } = props
  const { title, priceRange, priority, isCompleted, id } = item

  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

  const { setSelectedListItemId } = useSelectedListItem()

  //TODO: мутация на резервирование подарка

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setItemDetailsModalOpen(true)
  }

  return (
    <>
      <div className={styles["list-item-card"]}>
        <div className={styles["list-item-card__control"]}>
          <p className={styles["list-item-card__control-title"]}>{title}</p>
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
