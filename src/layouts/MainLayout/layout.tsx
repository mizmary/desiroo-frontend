import { Outlet, useLocation } from "react-router"
import { Header } from "@layouts/MainLayout/ui/Header"
import { Sidebar } from "@layouts/MainLayout/ui/Sidebar"

import styles from "./layout.module.scss"
import { SIDEBAR_OPTIONS } from "./constants"

import { ROUTES_TITLES } from "@/constants"

export const MainLayout = () => {
  const location = useLocation()

  const title = ROUTES_TITLES[location.pathname] || "Desiroo"

  return (
    <div className={styles.layout}>
      <Sidebar options={SIDEBAR_OPTIONS} />
      <div className={styles.content}>
        <Header title={title} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
