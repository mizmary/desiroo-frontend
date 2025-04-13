import { pageConfig } from "@config/page.config"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "./index.css"
import { Auth } from "./screens/auth/Auth"
import { Layout } from "./layouts/layout"
import App from "./App"
import { Providers } from "./providers"
import { Toaster } from "sonner"

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
