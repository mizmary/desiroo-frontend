import { ListItemCard } from "./components/ListItemCard/ListItemCard"
import { ListItemCardProps } from "./components/ListItemCard/listItemCard.types"

const list: ListItemCardProps["listItem"] = {
  title: "Подарок",
  priceRange: "From1000To5000",
  priority: "LOW"
}

function App() {
  return (
    <div className="w-[500px]">
      <ListItemCard listItem={list} />
    </div>
  )
}

export default App
