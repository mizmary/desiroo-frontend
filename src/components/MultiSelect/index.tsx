import clsx from "clsx"
import { useState, useRef, forwardRef } from "react"

import styles from "./main.module.scss"

type Option = {
  label: string
  value: string
}

type Props = {
  options: Option[]
  label?: string
  placeholder?: string
  error?: boolean
  disabled?: boolean
  helperText?: string
  className?: string
  value?: string[]
  onChange?: (value: string[]) => void
}

export const MultiSelect = forwardRef<HTMLInputElement, Props>(
  (
    {
      options,
      label,
      placeholder,
      error,
      disabled,
      helperText,
      className,
      value = [],
      onChange,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
      if (!disabled) setIsOpen((prev) => !prev)
    }

    const handleSelect = (val: string, e: React.MouseEvent) => {
      e.stopPropagation()
      const newValues = value.includes(val) ? value.filter((v) => v !== val) : [...value, val]

      onChange?.(newValues)
    }

    const selectedLabels = options
      .filter((opt) => value.includes(opt.value))
      .map((opt) => opt.label)
      .join(", ")

    const inputContainerClass = clsx(
      styles.container,
      disabled && styles.disabled,
      error && styles.error,
      className
    )

    const helperTextClass = clsx(styles.helperText, error && styles["helperText--error"])
    const iconClass = clsx(styles.icon, "material-symbols-outlined")

    const checkboxIconClass = clsx("material-symbols-outlined", styles["checkbox"])

    return (
      <label className={styles.label}>
        {label && (
          <div className={styles.text}>
            <span>{label}</span>
          </div>
        )}
        <div className={styles.inputWrapper}>
          <div
            className={inputContainerClass}
            ref={dropdownRef}
          >
            <input
              ref={ref}
              className={styles.input}
              type="text"
              placeholder={placeholder}
              value={selectedLabels}
              readOnly
              disabled={disabled}
              onClick={(e) => {
                e.stopPropagation()
                toggleDropdown()
              }}
              {...rest}
            />
            <span
              className={iconClass}
              onClick={() => toggleDropdown}
            >
              {isOpen ? "expand_less" : "expand_more"}
            </span>
          </div>
          {isOpen && (
            <div className={styles.dropdown}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={styles.option}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSelect(option.value, e)
                  }}
                >
                  <span className={checkboxIconClass}>
                    {selectedLabels.includes(option.value)
                      ? "check_box"
                      : "check_box_outline_blank"}
                  </span>
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          )}
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

MultiSelect.displayName = "select"
