import clsx from "clsx"

import styles from "./main.module.scss"

import { useLogout } from "@/hooks/useLogout"
import { useAuth } from "@/hooks/useAuth"

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  const { logout } = useLogout()
  const { isAuth } = useAuth()
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.menu}>
        {isAuth && (
          <span
            className={clsx("material-symbols-outlined", styles.icon)}
            onClick={() => logout()}
          >
            logout
          </span>
        )}
      </div>
    </div>
  )
}
