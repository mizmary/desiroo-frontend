import clsx from "clsx"
import styles from "./Input.module.scss"
import { InputProps } from "./input.types"
import { useState } from "react"
import React from "react"

export function Input({
  type = "text",
  label,
  placeholder,
  helperText,
  leftIcon,
  rightIcon,
  error,
  disabled,
  className
}: InputProps) {
  const [value, setValue] = useState("")

  const inputWrapperClass = clsx(
    styles.inputWrapper,
    disabled && styles["inputWrapper--disabled"],
    error && styles["inputWrapper--error"],
    className
  )

  const helperTextClass = clsx(styles.helperText, error && styles["helperText--error"])

  const iconClass = clsx(styles.icon, "material-symbols-outlined")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClear = () => {
    setValue("")
  }

  return (
    <label className={styles.label}>
      {label && <span>{label}</span>}
      <div className={inputWrapperClass}>
        {leftIcon && <span className={iconClass}>{leftIcon}</span>}
        <input
          className={styles.input}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {value && !disabled && (
          <span
            className={iconClass}
            onClick={handleClear}
          >
            close
          </span>
        )}
        {rightIcon && <span className={iconClass}>{rightIcon}</span>}
      </div>
      {helperText && <p className={helperTextClass}>{helperText}</p>}
    </label>
  )
}
