import styles from "./main.module.scss"
import { getLabelsByValues } from "../../../../utils/getLabelFromValue"

type Props = {
  title: string
  values: string[]
  valueOptions: { label: string; value: string }[]
}

export const DetailsField = (props: Props) => {
  const { title, values, valueOptions } = props

  return (
    <div className={styles["field"]}>
      <span className={styles["field__title"]}>{title}</span>
      <span className={styles["field__value"]}>{getLabelsByValues(valueOptions, values)}</span>
    </div>
  )
}
