import { WishlistsOverview } from "./ui/WishlistsOverview"
import { SelectedListProvider } from "./utils/SelectedListContext"
import { WishlistDetails } from "./ui/WishlistDetails"
import { SelectedListItemProvider } from "./utils/SelectedListItemContext"

export function Wishlists() {
  return (
    <>
      <SelectedListProvider>
        <SelectedListItemProvider>
          <WishlistsOverview />
          <WishlistDetails />
        </SelectedListItemProvider>
      </SelectedListProvider>
    </>
  )
}
