import { useParams } from "react-router"

import styles from "./main.module.scss"
import { ProfileGuest } from "./ui/guest/ProfileGuest"
import { ProfileUser } from "./ui/owner/ProfileUser"

export const Profile = () => {
  const { userId } = useParams()
  const isOwner = !userId

  return (
    <div className={styles.container}>
      {isOwner && <ProfileUser />}
      {!isOwner && <ProfileGuest userId={userId} />}
    </div>
  )
}
