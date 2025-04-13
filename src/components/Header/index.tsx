import clsx from "clsx"
import styles from "./main.module.scss"

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.menu}>
        <span className={clsx("material-symbols-outlined", styles.icon)}>logout</span>
      </div>
    </div>
  )
}
