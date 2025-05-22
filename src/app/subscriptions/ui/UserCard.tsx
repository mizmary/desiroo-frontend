import styles from "./UserCard.module.scss"
import giftImage from "../../../assets/giftbox.png"
import doneImage from "../../../assets/checkbox.png"

import { Button } from "@/components/Button"
import { IUser } from "@/app/auth/types"

type Props = {
  role: "owner" | "guest"
  user: IUser
}

export const UserCard = (props: Props) => {
  const { role, user } = props
  return (
    <div className={styles["card"]}>
      <div className={styles["card-main"]}>
        <div className={styles["card-main-avatar"]}></div>
        <div className={styles["card-main-info"]}>
          <span>{user.name}</span>
          <div className={styles["card-main-info--statistic"]}>
            <div className={styles["card-main-info--statistic--element"]}>
              <img
                src={giftImage}
                width={"16px"}
              />
              <span>{`Количество забронированных элементов: 0`}</span>
            </div>
            <div className={styles["card-main-info--statistic--element"]}>
              <img
                src={doneImage}
                width={"16px"}
              />
              <span>{`Количество исполненных желаний: 0`}</span>
            </div>
          </div>
        </div>
      </div>

      {role === "owner" && (
        <Button
          variant="secondary"
          size="small"
          className={styles["card-button"]}
        >
          Отписаться
        </Button>
      )}
    </div>
  )
}
