import clsx from "clsx"

import styles from "./main.module.scss"
import { TPriceRange, TPriority } from "../../types"
import { uiText } from "../../uiText"

type TPriceTagProps = {
  type: "price"
  value: TPriceRange
}

type TPriorityTagProps = {
  type: "priority"
  value: TPriority
}

type Props = TPriceTagProps | TPriorityTagProps

export const ItemTag = (props: Props) => {
  const { type, value } = props
  const tagClass = clsx(styles.tag, styles[`tag--${type}`], styles[`tag--${type}-${value}`])
  const componentText = type === "priority" ? uiText.titles.priorityLevel : uiText.titles.priceRange

  return <span className={tagClass}>{componentText[value]}</span>
}
