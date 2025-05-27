import { useQuery } from "@tanstack/react-query"

import { getProfile } from "../../api"
import { uiText } from "../../uiText"
import { UserSummary } from "../common/UserSummary"
import { UserDetails } from "../common/UserDetails"
import styles from "../common/styles/UserHeader.module.scss"

import { QUERY_KEY } from "@/constants"
import { Button } from "@/components/Button"

export const UserHeaderOwner = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: [QUERY_KEY.profile],
    queryFn: getProfile
  })

  const componentText = uiText.details

  const editAction = (
    <Button
      className={styles["actionButton"]}
      rightIcon="edit"
      variant="secondary"
    >
      {componentText.actions.editProfile}
    </Button>
  )

  if (isError) return null

  if (isSuccess) {
    const user = data.user
    return (
      <div className={styles["userHeader"]}>
        <UserSummary
          userName={user.name}
          userAvatar={user.avatar}
          actionButton={editAction}
        />
        <UserDetails user={user} />
      </div>
    )
  }
}
