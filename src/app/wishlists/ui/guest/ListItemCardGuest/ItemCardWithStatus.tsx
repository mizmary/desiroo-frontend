import clsx from "clsx"
import { useState } from "react"

import { BaseItemCard } from "./BaseItemCard"
import styles from "./itemCardWithReservation.module.scss"
import { WishlistItemDetailsModal } from "../modals/WishlistItemDetailsModal"

import { Button } from "@/components/Button"
import { TWishlistItem } from "@/app/wishlists/types"
import { uiText } from "@/app/wishlists/uiText"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"
import { useUpdateWishlistItem } from "@/app/wishlists/hooks/useWishlistItems"
import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"

type Props = {
  item: TWishlistItem
  isMyReservation?: boolean
}

export const ItemCardWithStatus = (props: Props) => {
  const { item, isMyReservation = false } = props
  const componentText = uiText.components.listItemCard
  const { isCompleted } = item

  const cardClass = clsx(
    styles["card"],
    isMyReservation && styles["card--my-reservation"],
    !isMyReservation && styles["card--alien-reservation"],
    item.isCompleted && styles["card--completed"]
  )

  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

  const { setSelectedListItemId } = useSelectedListItem()
  const { selectedListId } = useSelectedList()

  const { mutate: updateWishlistItem } = useUpdateWishlistItem()

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setItemDetailsModalOpen(true)
  }

  const handleCancelReservation = () => {
    updateWishlistItem({
      data: { isReserved: false, reserveUserId: null },
      wishlistId: selectedListId,
      itemId: item.id
    })
  }

  const myReservationActions = [
    <Button
      key={`${[componentText.actions.details]}`}
      size="small"
      onClick={handleViewDetails}
      variant="tertiary"
    >
      {componentText.actions.details}
    </Button>,
    <Button
      key={`${[componentText.actions.reservation]}`}
      size="small"
      color="danger"
      variant="secondary"
      onClick={handleCancelReservation}
    >
      {componentText.actions.cancelReservation}
    </Button>
  ]

  const alienReservationActions = [
    <Button
      key={`${[componentText.actions.details]}`}
      size="small"
      onClick={handleViewDetails}
      variant="tertiary"
    >
      {componentText.actions.details}
    </Button>
  ]

  const actions = isCompleted
    ? []
    : isMyReservation
      ? myReservationActions
      : alienReservationActions

  const title = isCompleted
    ? componentText.disabledItem
    : isMyReservation
      ? componentText.myReservation
      : componentText.alienReservation

  return (
    <>
      <div className={cardClass}>
        <div className={styles["card__title"]}>
          <p>{title}</p>
        </div>
        {isCompleted ? (
          <div className={styles["card__disabled"]}>
            <BaseItemCard
              item={item}
              actions={actions}
            />
            <div className={styles["card__disabled--overlay"]}></div>
          </div>
        ) : (
          <BaseItemCard
            item={item}
            actions={actions}
            isEmbedded
          />
        )}
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
