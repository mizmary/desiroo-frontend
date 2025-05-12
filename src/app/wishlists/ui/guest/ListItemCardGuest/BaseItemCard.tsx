import { ReactNode } from "react"
import clsx from "clsx"

import { ItemTag } from "../../common/ItemTag"
import styles from "./baseItemCard.module.scss"

import { TWishlistItem } from "@/app/wishlists/types"
type Props = {
  item: TWishlistItem
  actions: ReactNode[]
  isEmbedded?: boolean
}

export const BaseItemCard = (props: Props) => {
  const { item, actions, isEmbedded } = props
  const { title, priceRange, priority } = item

  return (
    <>
      <div
        className={clsx(
          styles["list-item-card"],
          isEmbedded && [styles["list-item-card--embedded"]]
        )}
      >
        <div className={styles["list-item-card__control"]}>
          <p className={styles["list-item-card__control-title"]}>{title}</p>
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
          <div className={styles["list-item-card__info-group"]}>
            {actions.map((action) => action)}
          </div>
        </div>
      </div>
    </>
  )
}
