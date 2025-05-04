import { Radio } from "../Radio"
import styles from "./main.module.scss"

type TOptions = {
  value: string
  label: string
}

type Props = {
  groupName: string
  options: TOptions[]
  value: string
  onChange: (value: string) => void
  groupLabel: string
}
export const RadioGroup = (props: Props) => {
  const { groupName, options, value, onChange, groupLabel } = props

  return (
    <div className={styles.container}>
      <div className={styles.labelWrap}>
        <p className={styles.groupLabel}>{groupLabel}</p>
      </div>
      <div className={styles.radioWrap}>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={groupName}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  )
}
