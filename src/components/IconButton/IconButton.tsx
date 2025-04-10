import clsx from "clsx"
import styles from "./IconButton.module.scss"
import { ReactNode } from "react"
import { TColor, TSize, TVariant } from "@/types"

type Props = {
  className?: string
  size?: TSize
  variant?: TVariant
  color?: TColor | "white"
  isDisabled?: boolean
  icon: ReactNode
  onClick?: () => void
}

export function IconButton({
  size = "medium",
  variant = "primary",
  color = "purple",
  icon,
  className,
  onClick,
  isDisabled = false
}: Props) {
  const iconButtonClass = clsx(
    className,
    styles.iconButton,
    styles[`iconButton--${size}`],
    styles[`iconButton--${color}--${variant}`],
    isDisabled && styles["iconButton--disabled"]
  )
  console.log(iconButtonClass)

  const iconClass = clsx("material-symbols-outlined", styles.icon)

  return (
    <button
      className={iconButtonClass}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
    >
      <span className={iconClass}>{icon}</span>
    </button>
  )
}
