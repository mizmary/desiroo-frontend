import { ListItemCardProps } from "./listItemCard.types"
import styles from "./ListItemCard.module.scss"
import clsx from "clsx"
import { ItemTag } from "./ItemTag/ItemTag"
import { Button } from "../Button/Button"
import { useState } from "react"

export function ListItemCard({ isCompleted = false, listItem }: ListItemCardProps) {
  const [completed, setCompleted] = useState(isCompleted)

  const handleClick = () => {
    setCompleted((prev) => !prev)
  }

  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <span
          className={clsx("material-symbols-outlined", styles.icon)}
          onClick={handleClick}
        >
          {completed ? "check_box" : "check_box_outline_blank"}
        </span>
        <p className={clsx(styles.title, { [styles.completed]: completed })}>{listItem.title}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          <ItemTag
            type="price"
            value={listItem.priceRange}
          />
          <ItemTag
            type="priority"
            value={listItem.priority}
          />
        </div>
        <Button
          children={"Показать детали"}
          size="small"
          rightIcon="expand_content"
        />
      </div>
    </div>
  )
}
