import styles from "./layout.module.scss"
import { Outlet, useLocation } from "react-router"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { ROUTES_TITLES, SIDEBAR_OPTIONS } from "@/constants"

export const Layout = () => {
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
