import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App"
import { pageConfig } from "./config/page.config"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route
        path={pageConfig.home}
        element={<App />}
      />
    </Routes>
  </BrowserRouter>
)
