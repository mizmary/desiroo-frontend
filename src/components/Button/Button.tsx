import clsx from "clsx"
import { ButtonProps } from "./button.types"
import styles from "./Button.module.scss"

export function Button({
  size = "medium",
  variant = "primary",
  color = "purple",
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  isDisabled = false
}: ButtonProps) {
  const buttonClass = clsx(
    styles.button,
    styles[`button--${size}`],
    styles[`button--${color}--${variant}`],
    isDisabled && styles["button--disabled"],
    className
  )

  const buttonIconClass = clsx("material-symbols-outlined", styles.icon)
  return (
    <button
      className={buttonClass}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
    >
      {leftIcon && <span className={buttonIconClass}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={buttonIconClass}>{rightIcon}</span>}
    </button>
  )
}
