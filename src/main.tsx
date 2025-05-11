import "./index.css"
import { Toaster } from "sonner"
import ReactDOM from "react-dom/client"
import { pageConfig } from "@config/page.config"
import { BrowserRouter, Route, Routes } from "react-router"

import InProgress from "./InProgress"
import { Providers } from "./providers"
import { MainLayout } from "./layouts/MainLayout/layout"
import { Auth } from "./app/auth/page"
import { Wishlists } from "./app/wishlists/page"

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
