// import { useLocation } from "react-router"
// import { routeTitles } from "./constants"
import { ListItemCard } from "./components/ListItemCard/ListItemCard"

function App() {
  // const location = useLocation()
  // const title = routeTitles[location.pathname] || "Desiroo"
  return (
    <div style={{ width: "750px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <ListItemCard
        title="title"
        priority="LOW"
        priceRange="Over50000"
      />
    </div>
  )
}

export default App
