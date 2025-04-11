import { pageConfig } from "@config/page.config"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "./index.css"
import { Auth } from "./screens/auth/Auth"
import { Layout } from "./layouts/layout"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route
        path={pageConfig.auth}
        element={<Auth />}
      />
      <Route element={<Layout />}>
        <Route
          path={pageConfig.profile}
          element={<App />}
        />
        <Route
          path={pageConfig.lists}
          element={<App />}
        />
        <Route
          path={pageConfig.subscriptions}
          element={<App />}
        />
        <Route
          path={pageConfig.achievements}
          element={<App />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
