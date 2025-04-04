import { ReactNode } from "react"

export interface ButtonProps {
  size?: "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "tertiary"
  color?: "purple" | "peach" | "pink" | "danger"
  isDisabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  children: ReactNode
  onClick?: () => void
}
