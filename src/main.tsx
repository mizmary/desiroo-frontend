import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App"
import { pageConfig } from "@config/page.config"
import "./index.css"
import { Auth } from "./screens/auth/Auth"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route
        path={pageConfig.home}
        element={<App />}
      />
      <Route
        path={pageConfig.auth}
        element={<Auth />}
      />
    </Routes>
  </BrowserRouter>
)
