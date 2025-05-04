import clsx from "clsx"
import styles from "./main.module.scss"
import { useUser } from "@/hooks/useUser"

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  const { logout } = useUser()
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.menu}>
        <span
          className={clsx("material-symbols-outlined", styles.icon)}
          onClick={() => logout()}
        >
          logout
        </span>
      </div>
    </div>
  )
}
