import clsx from "clsx"
import { ReactNode } from "react"
import styles from "./main.module.scss"
import { TColor, TSize, TVariant } from "@/types"

type Props = {
  size?: TSize
  variant?: TVariant
  color?: TColor
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  children: ReactNode
  onClick?: () => void
}

export const Button = ({
  size = "medium",
  variant = "primary",
  color = "purple",
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  disabled = false
}: Props) => {
  const buttonClass = clsx(
    styles.button,
    styles[`button--${size}`],
    styles[`button--${color}--${variant}`],
    disabled && styles["button--disabled"],
    className
  )

  const buttonIconClass = clsx("material-symbols-outlined", styles.icon)
  return (
    <button
      className={buttonClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {leftIcon && <span className={buttonIconClass}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={buttonIconClass}>{rightIcon}</span>}
    </button>
  )
}
