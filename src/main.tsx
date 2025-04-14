import "./index.css"
import App from "./App"
import { Toaster } from "sonner"
import { Providers } from "./providers"
import ReactDOM from "react-dom/client"
import { Layout } from "./layouts/layout"
import { Auth } from "./screens/auth/page"
import { pageConfig } from "@config/page.config"
import { BrowserRouter, Route, Routes } from "react-router"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <BrowserRouter>
      <Toaster
        theme="light"
        position="bottom-center"
        duration={1500}
      />
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
  </Providers>
)
