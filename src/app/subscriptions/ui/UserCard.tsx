import styles from "./UserCard.module.scss"
import giftImage from "../../../assets/giftbox.png"
import doneImage from "../../../assets/checkbox.png"
import { FollowingPerson } from "../types"
import { uiText } from "../uiText"

import { Button } from "@/components/Button"
import { avatars } from "@/assets/avatars/avatars"

type Props = {
  role: "owner" | "guest"
  user: FollowingPerson
}

export const UserCard = (props: Props) => {
  const { role, user } = props
  const componentText = uiText.userCard
  return (
    <div className={styles["card"]}>
      <div className={styles["card__main"]}>
        <div className={styles["card__main--avatar"]}>
          <img
            className={styles["card__main--avatar--image"]}
            src={user.avatar ? avatars[user.avatar] : undefined}
          ></img>
        </div>
        <div className={styles["card__main--info"]}>
          <span>{user.name}</span>
          <div className={styles["card__main--info--statistic"]}>
            <div className={styles["card__main--info--statistic--element"]}>
              <img
                className={styles["card__main--info--statistic--element--icon"]}
                src={giftImage}
              />
              <span>{`${componentText.statistics.reservedItems}: ${user.reservedCount}`}</span>
            </div>
            <div className={styles["card__main--info--statistic--element"]}>
              <img
                className={styles["card__main--info--statistic--element--icon"]}
                src={doneImage}
              />
              <span>{`${componentText.statistics.completedItems}: ${user.completedWishesCount}`}</span>
            </div>
          </div>
        </div>
      </div>

      {role === "owner" && (
        <Button
          variant="secondary"
          size="small"
          className={styles["card__button"]}
        >
          Отписаться
        </Button>
      )}
    </div>
  )
}
