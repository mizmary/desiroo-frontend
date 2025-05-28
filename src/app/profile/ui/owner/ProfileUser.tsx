import { useNavigate } from "react-router"

import { uiText } from "../../uiText"
import { UserHeaderOwner } from "./UserHeaderOwner"
import { UserWishlists } from "../common/UserWishlists"

import { ROUTS } from "@/constants"
import { useWishlists } from "@/app/wishlists/hooks/useWishlists"

export const ProfileUser = () => {
  const { data: wishlists } = useWishlists()
  const navigate = useNavigate()
  const listsTitle = uiText.lists.title.owner

  const handleNavigateLists = () => navigate(ROUTS.lists)
  const selectedListPath = ROUTS.lists

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <UserHeaderOwner />
      <UserWishlists
        title={`${listsTitle}`}
        lists={wishlists!}
        onNavigateToWishlists={handleNavigateLists}
        selectedListPath={selectedListPath}
      />
    </div>
  )
}
