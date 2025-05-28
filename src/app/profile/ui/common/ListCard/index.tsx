import styles from "./main.module.scss"

import { ACCESS_LEVEL_TITLES } from "@/app/wishlists/constants"
import { uiText } from "@/app/wishlists/uiText"
import { TAccessLevel } from "@/app/wishlists/types"

type Props = {
  title: string
  itemCount: string
  accessLevel: TAccessLevel
  acquiredPercentage: number
  onClick: () => void
}

export const ListCard = (props: Props) => {
  const { title, itemCount, onClick, accessLevel, acquiredPercentage } = props
  const componentText = uiText.components.listCard
  return (
    <div
      className={styles["list-card"]}
      onClick={onClick}
    >
      <span className={styles["list-card__title"]}>{title}</span>
      <p className={styles["list-card__description"]}>
        {`${componentText.elementsCount}: ${itemCount}`}
      </p>
      <p className={styles["list-card__description"]}>
        {`${componentText.accessLevel}: ${ACCESS_LEVEL_TITLES[accessLevel]}`}
      </p>
      <div className={styles["list-card__progressbar"]}>
        <div className={styles["list-card__progressbar-bar"]}>
          <div
            className={styles["list-card__progressbar-bar-progress"]}
            style={{ width: `${acquiredPercentage}%` }}
          />
        </div>
        <span className={styles["list-card__progressbar-percentage"]}>{acquiredPercentage}%</span>
      </div>
    </div>
  )
}
