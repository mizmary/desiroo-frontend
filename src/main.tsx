import "./index.css"
import InProgress from "./InProgress"
import { Toaster } from "sonner"
import { Providers } from "./providers"
import ReactDOM from "react-dom/client"
import { MainLayout } from "./layouts/MainLayout/layout"
import { Auth } from "./screens/auth/page"
import { pageConfig } from "@config/page.config"
import { BrowserRouter, Route, Routes } from "react-router"
import { Wishlists } from "./screens/wishlists/page"

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
        <Route element={<MainLayout />}>
          <Route
            path={pageConfig.profile}
            element={<InProgress />}
          />
          <Route
            path={pageConfig.lists}
            element={<Wishlists />}
          />
          <Route
            path={pageConfig.subscriptions}
            element={<InProgress />}
          />
          <Route
            path={pageConfig.achievements}
            element={<InProgress />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Providers>
)
