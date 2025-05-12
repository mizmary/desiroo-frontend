import clsx from "clsx"
import { useState } from "react"

import { BaseItemCard } from "./BaseItemCard"
import styles from "./itemCardWithReservation.module.scss"
import { WishlistItemDetailsModal } from "../modals/WishlistItemDetailsModal"

import { Button } from "@/components/Button"
import { TWishlistItem } from "@/app/wishlists/types"
import { uiText } from "@/app/wishlists/uiText"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"

type Props = {
  item: TWishlistItem
  isMyReservation?: boolean
}

export const ItemCardWithReservation = (props: Props) => {
  const { item, isMyReservation = false } = props
  const componentText = uiText.components.listItemCard

  const cardClass = clsx(
    styles["reserved"],
    isMyReservation && styles["reserved--my-reservation"],
    !isMyReservation && styles["reserved--alien-reservation"]
  )

  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false)

  const { setSelectedListItemId } = useSelectedListItem()

  const handleViewDetails = () => {
    setSelectedListItemId(item.id)
    setItemDetailsModalOpen(true)
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

  return (
    <>
      <div className={cardClass}>
        <div className={styles["reserved__title"]}>
          <p>{isMyReservation ? componentText.myReservation : componentText.alienReservation}</p>
        </div>
        <BaseItemCard
          item={item}
          actions={isMyReservation ? myReservationActions : alienReservationActions}
          isEmbedded
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
