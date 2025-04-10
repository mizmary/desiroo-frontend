import clsx from "clsx"
import { ItemTagProps } from "./itemTag.types"
import styles from "./ItemTag.module.scss"

export function ItemTag({ type, value }: ItemTagProps) {
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
