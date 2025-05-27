import { useParams } from "react-router"

import styles from "./main.module.scss"
import { UserHeaderOwner } from "./ui/owner/UserHeaderOwner"
import { UserHeaderGuest } from "./ui/guest/UserHeaderGuest"

export const Profile = () => {
  const { userId } = useParams()
  const isOwner = !userId

  return (
    <div className={styles.container}>
      {isOwner && <UserHeaderOwner />}
      {!isOwner && <UserHeaderGuest userId={userId} />}
    </div>
  )
}
