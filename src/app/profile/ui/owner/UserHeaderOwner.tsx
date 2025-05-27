import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import { getProfile } from "../../api"
import { uiText } from "../../uiText"
import { UserSummary } from "../common/UserSummary"
import { UserDetails } from "../common/UserDetails"
import styles from "../common/styles/UserHeader.module.scss"
import { EditProfileModal } from "./EditProfileModal"

import { QUERY_KEY } from "@/constants"
import { Button } from "@/components/Button"

export const UserHeaderOwner = () => {
  const [isModalEditProfileOpen, setModalEditProfileOpen] = useState<boolean>(false)

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
      onClick={() => setModalEditProfileOpen(true)}
    >
      {componentText.actions.editProfile}
    </Button>
  )

  if (isError) return null

  if (isSuccess) {
    const user = data.user
    return (
      <>
        <div className={styles["userHeader"]}>
          <UserSummary
            userName={user.name}
            userAvatar={user.avatar}
            actionButton={editAction}
          />
          <UserDetails user={user} />
        </div>
        {isModalEditProfileOpen && (
          <EditProfileModal
            isOpen={isModalEditProfileOpen}
            onClose={() => setModalEditProfileOpen(false)}
            user={user}
          />
        )}
      </>
    )
  }
}
