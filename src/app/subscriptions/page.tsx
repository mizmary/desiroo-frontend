import styles from "./main.module.scss"
import { UserCard } from "./ui/UserCard"

import { useUser } from "@/hooks/useUser"

export const Subscriptions = () => {
  const { user } = useUser()
  return (
    <div className={styles.container}>
      <UserCard
        role="owner"
        user={user}
      />
    </div>
  )
}
