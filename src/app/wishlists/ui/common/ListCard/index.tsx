import clsx from "clsx"

import styles from "./main.module.scss"
import { TAccessLevel } from "../../../types"
import { uiText } from "../../../uiText"
import { useSelectedList } from "../../../utils/SelectedListContext"
import { ACCESS_LEVEL_TITLES } from "../../../constants"

type Props = {
  title: string
  itemCount: string
  accessLevel: TAccessLevel
  acquiredPercentage: number
  wishlistId: string
  onClick: () => void
}

export const ListCard = (props: Props) => {
  const { title, itemCount, onClick, accessLevel, acquiredPercentage, wishlistId } = props
  const componentText = uiText.components.listCard
  const { selectedListId } = useSelectedList()

  const cardClass = clsx(
    styles["list-card"],
    selectedListId === wishlistId && styles["list-card--selected"]
  )

  return (
    <div
      className={cardClass}
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
