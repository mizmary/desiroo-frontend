import { ReactNode, useEffect } from "react"

import styles from "./main.module.scss"

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  maxWidth: string
}

export const BaseModal = (props: Props) => {
  const { isOpen, onClose, children, maxWidth } = props

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      className={styles["backdrop"]}
      onClick={onBackdropClick}
    >
      <div
        className={styles["modal"]}
        style={{ maxWidth: maxWidth }}
      >
        {children}
      </div>
    </div>
  )
}
