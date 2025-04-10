import clsx from "clsx"
import { TPriceRange, TPriorityLevel } from "@/types"
import styles from "./ItemTag.module.scss"

type TPriceTagProps = {
  type: "price"
  value: TPriceRange
}

type TPriorityTagProps = {
  type: "priority"
  value: TPriorityLevel
}

type Props = TPriceTagProps | TPriorityTagProps

export function ItemTag({ type, value }: Props) {
  const tagClass = clsx(styles.tag, styles[`tag--${type}--${value}`])

  const tagText = {
    LOW: "Низкий приоритет",
    MEDIUM: "Средний приоритет",
    HIGH: "Высокий приоритет",
    UpTo1000: "До 1000р",
    From1000To5000: "1000 - 5000р",
    From5000To10000: "5000 - 10000р",
    From10000To50000: "10000 - 50000р",
    Over50000: "Более 50000р"
  }
  return <span className={tagClass}>{tagText[value]}</span>
}
