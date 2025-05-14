import { useState } from "react"

import { BaseItemCard } from "./BaseItemCard"
import styles from "./itemCard.module.scss"
import { WishlistItemDetailsModal } from "../modals/WishlistItemDetailsModal"

import { TWishlistItem } from "@/app/wishlists/types"
import { Button } from "@/components/Button"
import { uiText } from "@/app/wishlists/uiText"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"
import { useUpdateWishlistItem } from "@/app/wishlists/hooks/useWishlistItems"
import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"
import { useUser } from "@/hooks/useUser"

type Props = {
  item: TWishlistItem
}

export const ItemCard = (props: Props) => {
  const { item } = props
  const componentText = uiText.components.listItemCard

  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

  const { setSelectedListItemId } = useSelectedListItem()
  const { selectedListId } = useSelectedList()

  const { user } = useUser()

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setItemDetailsModalOpen(true)
  }

  const { mutate: updateWishlistItem } = useUpdateWishlistItem()

  const handleSetItemReserved = () => {
    updateWishlistItem({
      data: { isReserved: true, reserveUserId: user.id },
      wishlistId: selectedListId,
      itemId: item.id
    })
  }

  return (
    <>
      <div className={styles["card"]}>
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
              onClick={handleSetItemReserved}
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
