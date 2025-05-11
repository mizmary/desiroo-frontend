import { useParams } from "react-router"

import { SelectedListProvider } from "./utils/SelectedListContext"
import { SelectedListItemProvider } from "./utils/SelectedListItemContext"
import { WishlistsOverviewOwner } from "./ui/owner/WishlistsOverviewOwner"
import { WishlistsOverviewGuest } from "./ui/guest/WishlistsOverviewGuest"
import { WishlistDetailsOwner } from "./ui/owner/WishlistDetailsOwner"
import { WishlistDetailsGuest } from "./ui/guest/WishlistDetailsGuest"

export function Wishlists() {
  const { userId } = useParams()
  const isOwner = !userId

  return (
    <>
      <SelectedListProvider>
        <SelectedListItemProvider>
          {isOwner ? <WishlistsOverviewOwner /> : <WishlistsOverviewGuest userId={userId} />}
          {isOwner ? <WishlistDetailsOwner /> : <WishlistDetailsGuest userId={userId} />}
        </SelectedListItemProvider>
      </SelectedListProvider>
    </>
  )
}
