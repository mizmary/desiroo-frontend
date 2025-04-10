import clsx from "clsx"
import styles from "./ListCard.module.scss"

type Props = {
  title: string
  itemCount: string
  averageBudget: string
  acquiredPercentage: number
}
export function ListCard({ title, itemCount, averageBudget, acquiredPercentage }: Props) {
  const onEdit = () => {
    alert("Edit list!")
  }
  const onDelete = () => {
    alert("Delete list!")
  }

  const editIconClass = clsx("material-symbols-outlined", styles["icon--edit"])
  const deleteIconClass = clsx("material-symbols-outlined", styles["icon--delete"])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.icons_container}>
          <span
            className={editIconClass}
            onClick={onEdit}
          >
            edit
          </span>
          <span
            className={deleteIconClass}
            onClick={onDelete}
          >
            delete
          </span>
        </div>
      </div>
      <p className={styles["body_text"]}>Количество элементов: {itemCount}</p>
      <p className={styles["body_text"]}>Средний бюджет: {averageBudget}</p>
      <div className={styles["progressbar_container"]}>
        <div className={styles.progressbar}>
          <div
            className={styles.progress}
            style={{ width: `${acquiredPercentage}%` }}
          />
        </div>
        <span className={styles["progressbar-text"]}>{acquiredPercentage}%</span>
      </div>
    </div>
  )
}
