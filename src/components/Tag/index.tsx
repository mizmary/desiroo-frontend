import clsx from "clsx"

import styles from "./main.module.scss"

type Props = {
  title: string
  isDeletable?: boolean
  onDelete?: () => void
}

export const Tag = (props: Props) => {
  const { title, isDeletable = false, onDelete } = props

  return (
    <div className={styles["tag"]}>
      <span className={styles["tag__title"]}>{title}</span>
      {isDeletable && (
        <span
          className={clsx("material-symbols-outlined", styles["tag__icon"])}
          onClick={onDelete}
        >
          close
        </span>
      )}
    </div>
  )
}
