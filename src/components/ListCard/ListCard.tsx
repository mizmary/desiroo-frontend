import { ListCardProps } from "./listCard.types"
import styles from "./ListCard.module.scss"
import clsx from "clsx"

export function ListCard({ name, itemCount, averageBudget, acquiredPercentage }: ListCardProps) {
  const onEdit = () => {
    alert("Edit list!")
  }
  const onDelete = () => {
    alert("Delete list!")
  }

  const editIconClass = clsx("material-symbols-outlined", "icon", styles["icon--edit"])
  const deleteIconClass = clsx("material-symbols-outlined", styles["icon--delete"])

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span>{name}</span>
        <div className={styles.icons_wrap}>
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
      <span>Количество элементов: {itemCount}</span>
      <span>Средний бюджет: {averageBudget}</span>
      <div className="flex items-center gap-3 mt-2">
        <div className={styles["progressbar-wrap"]}>
          <div
            className={styles.progressbar}
            style={{ width: `${acquiredPercentage}%` }}
          />
        </div>
        <span className={styles["progressbar-text"]}>{acquiredPercentage}%</span>
      </div>
    </div>
  )
}
