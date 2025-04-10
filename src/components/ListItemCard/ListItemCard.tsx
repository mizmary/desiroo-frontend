import { useState } from "react"
import clsx from "clsx"
import { TPriceRange, TPriorityLevel } from "@/types"
import { Button } from "../Button/Button"
import { ItemTag } from "./ItemTag/ItemTag"
import styles from "./ListItemCard.module.scss"

type Props = {
  title: string
  description?: string
  link?: string
  priority: TPriorityLevel
  priceRange: TPriceRange
  isCompleted?: boolean
}

export function ListItemCard({
  isCompleted = false,
  title,
  description,
  link,
  priority,
  priceRange
}: Props) {
  const [completed, setCompleted] = useState(isCompleted)

  const handleClick = () => {
    setCompleted((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span
          className={clsx("material-symbols-outlined", styles.checkbox)}
          onClick={handleClick}
        >
          {completed ? "check_box" : "check_box_outline_blank"}
        </span>
        <p className={clsx(styles.title, { [styles.completed]: completed })}>{title}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          <ItemTag
            type="price"
            value={priceRange}
          />
          <ItemTag
            type="priority"
            value={priority}
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
