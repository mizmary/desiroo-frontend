import clsx from "clsx"
import { forwardRef } from "react"

import styles from "./main.module.scss"

type Props = {
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
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
      className,
      readOnly,
      ...rest
    },
    ref
  ) => {
    const inputContainerClass = clsx(
      styles.container,
      disabled && styles.disabled,
      error && styles.error,
      className
    )

    const helperTextClass = clsx(styles.helperText, error && styles["helperText--error"])

    const iconClass = clsx(styles.icon, "material-symbols-outlined")

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
            readOnly={readOnly}
            placeholder={placeholder}
            {...rest}
          />
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

Input.displayName = "input"
