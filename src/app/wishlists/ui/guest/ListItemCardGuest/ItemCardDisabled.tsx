import { useState } from "react"

import { BaseItemCard } from "./BaseItemCard"
import styles from "./itemCard.module.scss"
import { WishlistItemDetailsModal } from "../modals/WishlistItemDetailsModal"

import { Button } from "@/components/Button"
import { TWishlistItem } from "@/app/wishlists/types"
import { uiText } from "@/app/wishlists/uiText"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"

type Props = {
  item: TWishlistItem
}

export const ItemCardDisabled = (props: Props) => {
  const { item } = props
  const componentText = uiText.components.listItemCard

  const [isModalOpen, setModalOpen] = useState(false)
  const { setSelectedListItemId } = useSelectedListItem()

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setModalOpen(true)
  }
  return (
    <>
      <div className={styles["disabled"]}>
        <BaseItemCard
          item={item}
          actions={[]}
        />
        <div className={styles["disabled__overlay"]}>
          <div className={styles["disabled__overlay--text"]}>
            <span>{componentText.disabledItem}</span>
          </div>

          <Button
            className={styles["disabled__overlay--button"]}
            size="small"
            onClick={() => {
              handleViewDetails()
              console.log("Click")
            }}
          >
            {componentText.actions.details}
          </Button>
        </div>
      </div>
      <WishlistItemDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false)
          setSelectedListItemId("")
        }}
      />
    </>
  )
}
