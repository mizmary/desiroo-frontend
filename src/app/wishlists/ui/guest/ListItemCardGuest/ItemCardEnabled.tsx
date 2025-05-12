import { useState } from "react"

import { BaseItemCard } from "./BaseItemCard"
import styles from "./itemCard.module.scss"
import { WishlistItemDetailsModal } from "../modals/WishlistItemDetailsModal"

import { TWishlistItem } from "@/app/wishlists/types"
import { Button } from "@/components/Button"
import { uiText } from "@/app/wishlists/uiText"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"

type Props = {
  item: TWishlistItem
}

export const ItemCardEnabled = (props: Props) => {
  const { item } = props
  const componentText = uiText.components.listItemCard

  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

  const { setSelectedListItemId } = useSelectedListItem()

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setItemDetailsModalOpen(true)
  }

  return (
    <>
      <div className={styles["enabled"]}>
        <BaseItemCard
          item={item}
          actions={[
            <Button
              key={`${[componentText.actions.details]}`}
              onClick={handleViewDetails}
              size="small"
              variant="tertiary"
            >
              {componentText.actions.details}
            </Button>,
            <Button
              key={`${[componentText.actions.reservation]}`}
              onClick={handleViewDetails}
              size="small"
              color="peach"
            >
              {componentText.actions.reservation}
            </Button>
          ]}
        />
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
