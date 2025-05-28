import { useQuery } from "@tanstack/react-query"

import styles from "./main.module.scss"
import { UserCard } from "./ui/UserCard"
import { uiText } from "./uiText"
import { getFollowing } from "./api/follow.api"

import { useUser } from "@/hooks/useUser"
import { QUERY_KEY } from "@/constants"

export const Subscriptions = () => {
  const { user } = useUser()

  const { data: followings } = useQuery({
    queryKey: [QUERY_KEY.following],
    queryFn: () => getFollowing(user.id)
  })

  if (!followings) return null

  return (
    <div className={styles["subscriptions"]}>
      <div className={styles["subscriptions__header"]}>
        <span>{uiText.pageTitle}</span>
      </div>
      {followings.length > 0 &&
        followings.map((following) => (
          <UserCard
            key={following.id}
            role="owner"
            user={following}
          />
        ))}
      {followings.length === 0 && (
        <div className={styles["subscriptions__emptyList"]}>
          <span>{uiText.emptyList}</span>
        </div>
      )}
    </div>
  )
}
