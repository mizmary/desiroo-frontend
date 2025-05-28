import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { checkIsFollowing, followUser, unfollowUser } from "../../api"
import { uiText } from "../../uiText"
import styles from "../common/styles/UserHeader.module.scss"
import { UserSummary } from "../common/UserSummary"
import { UserDetails } from "../common/UserDetails"

import { MUTATION_KEY, QUERY_KEY } from "@/constants"
import { Button } from "@/components/Button"
import { useAuth } from "@/hooks/useAuth"
import { IUser } from "@/app/auth/types"

type Props = {
  user: IUser
}

export const UserHeaderGuest = (props: Props) => {
  const { user } = props
  const { user: currentUser } = useAuth()
  const componentText = uiText.details
  const queryClient = useQueryClient()

  const { data: followingData } = useQuery({
    queryKey: [QUERY_KEY.isFollowing, user.id],
    queryFn: () => checkIsFollowing(currentUser!.id, user.id)
  })

  const { mutate: followUserMutation } = useMutation({
    mutationKey: [MUTATION_KEY.followUser],
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.isFollowing]
      })
    }
  })
  const { mutate: unfollowUserMutation } = useMutation({
    mutationKey: [MUTATION_KEY.unfollowUser],
    mutationFn: unfollowUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.isFollowing]
      })
    }
  })

  const handleFollowUser = () => {
    followUserMutation({ followerId: currentUser!.id, followingId: user.id })
  }
  const handleUnfollowUser = () => {
    unfollowUserMutation({ followerId: currentUser!.id, followingId: user.id })
  }

  const followAction = (
    <Button
      className={styles["actionButton"]}
      rightIcon="add"
      onClick={handleFollowUser}
    >
      {componentText.actions.follow}
    </Button>
  )
  const existingFollowAction = (
    <Button
      className={styles["actionButton"]}
      rightIcon="check"
      variant="secondary"
      onClick={handleUnfollowUser}
    >
      {componentText.actions.existingFollow}
    </Button>
  )

  return (
    <div className={styles["userHeader"]}>
      <UserSummary
        userName={user.name}
        userAvatar={user.avatar}
        actionButton={followingData ? existingFollowAction : followAction}
      />
      <UserDetails user={user} />
    </div>
  )
}
