import clsx from "clsx"
import styles from "./Input.module.scss"
import React, { forwardRef, useState } from "react"

type Props = {
  error?: boolean
  disabled?: boolean
  leftIcon?: string
  rightIcon?: string
  type?: string
  label?: string
  placeholder?: string
  helperText?: string
  className?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = "text",
      label,
      placeholder,
      helperText,
      leftIcon,
      rightIcon,
      error,
      disabled,
      className
    },
    ref
  ) => {
    const [value, setValue] = useState("")

    const inputContainerClass = clsx(
      styles.container,
      disabled && styles.disabled,
      error && styles.error,
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
        {label && (
          <div className={styles.text}>
            <span>{label}</span>
          </div>
        )}
        <div className={inputContainerClass}>
          {leftIcon && <span className={iconClass}>{leftIcon}</span>}
          <input
            ref={ref}
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
        {helperText && (
          <div className={styles.text}>
            <p className={helperTextClass}>{helperText}</p>
          </div>
        )}
      </label>
    )
  }
)

Input.displayName = "field"
