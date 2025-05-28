import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router"

import { getPublicProfile } from "../../api"
import { uiText } from "../../uiText"
import { UserWishlists } from "../common/UserWishlists"
import { UserHeaderGuest } from "./UserHeaderGuest"

import { QUERY_KEY } from "@/constants"
import { useWishlistsByUserId } from "@/app/wishlists/hooks/useWishlists"

export const ProfileGuest = ({ userId }: { userId: string }) => {
  const {
    data: userData,
    isSuccess,
    isError
  } = useQuery({
    queryKey: [QUERY_KEY.publicProfile, userId],
    queryFn: () => getPublicProfile(userId)
  })

  const { data: wishlists } = useWishlistsByUserId(userId)
  const navigate = useNavigate()
  const listsTitle = uiText.lists.title.guest

  const handleNavigate = () => navigate(`/user/${userId}/lists`)
  const selectedListPath = `/user/${userId}/lists`

  if (isError) return null
  if (isSuccess) {
    const user = userData.user
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <UserHeaderGuest user={user} />
        <UserWishlists
          title={`${listsTitle} ${user.name}`}
          lists={wishlists!}
          onNavigateToWishlists={handleNavigate}
          userId={userId}
          selectedListPath={selectedListPath}
        />
      </div>
    )
  }
}
