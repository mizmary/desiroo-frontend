import { ReactNode } from "react"

import styles from "./main.module.scss"

import { avatars } from "@/assets/avatars/avatars"

type Props = {
  userName: string
  userAvatar: string | undefined
  actionButton: ReactNode
}

export const UserSummary = (props: Props) => {
  const { userName, userAvatar, actionButton } = props
  return (
    <div className={styles["summary"]}>
      <div className={styles["summary__avatar"]}>
        <img
          className={styles["summary__avatar--image"]}
          src={userAvatar ? avatars[userAvatar] : undefined}
        ></img>
      </div>
      <div className={styles["summary__controls"]}>
        <span className={styles["summary__controls--name"]}>{userName}</span>
        {actionButton}
      </div>
    </div>
  )
}
