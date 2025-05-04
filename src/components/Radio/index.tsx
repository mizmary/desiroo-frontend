import clsx from "clsx"
import styles from "./main.module.scss"

type Props = {
  label: string
  value: string
  name: string
  checked: boolean
  onChange: (value: string) => void
  disabled?: boolean
  className?: string
}

export const Radio = (props: Props) => {
  const { label, value, name, checked, onChange, disabled = false, className } = props

  const radioClassName = clsx(
    styles.radio,
    checked && styles.checked,
    disabled && styles.disabled,
    className
  )
  return (
    <label className={radioClassName}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
      />
      <span className={styles.radioIndicator} />
      <span className={styles.radioLabel}>{label}</span>
    </label>
  )
}
