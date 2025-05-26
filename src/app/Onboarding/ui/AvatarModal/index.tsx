import { useState } from "react"
import clsx from "clsx"

import styles from "./main.module.scss"
import man1 from "../../../../assets/avatars/man-1.png"
import man2 from "../../../../assets/avatars/man-2.png"
import man3 from "../../../../assets/avatars/man-3.png"
import woman1 from "../../../../assets/avatars/woman-1.png"
import woman2 from "../../../../assets/avatars/woman-2.png"
import woman3 from "../../../../assets/avatars/woman-3.png"
import { uiText } from "../../uiText"

import { BaseModal } from "@/components/BaseModal"
import { Button } from "@/components/Button"

const avatars = [
  { src: man1, name: "man-1.png" },
  { src: man2, name: "man-2.png" },
  { src: man3, name: "man-3.png" },
  { src: woman1, name: "woman-1.png" },
  { src: woman2, name: "woman-2.png" },
  { src: woman3, name: "woman-3.png" }
]

type AvatarModalProps = {
  isOpen: boolean
  onClose: () => void
  onSelect: (avatarFileName: string) => void
  initialValue?: string
}

export const AvatarModal = ({ isOpen, onClose, onSelect, initialValue }: AvatarModalProps) => {
  const [selected, setSelected] = useState(initialValue ?? "")
  const modalText = uiText.avatarModal

  const handleSave = () => {
    if (selected) {
      onSelect(selected)
      onClose()
    }
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="500px"
    >
      <div className={styles["modal"]}>
        <span className={styles["modal__header"]}>{modalText.title}</span>
        <div className={styles["modal__grid"]}>
          {avatars.map((avatar) => (
            <div
              className={clsx(
                styles["modal__grid--element"],
                selected === avatar.name && styles.selected
              )}
            >
              <img
                key={avatar.name}
                src={avatar.src}
                alt={avatar.name}
                className={styles["modal__grid--avatar"]}
                onClick={() => setSelected(avatar.name)}
              />
            </div>
          ))}
        </div>
        <Button
          onClick={handleSave}
          disabled={!selected}
        >
          {modalText.saveButton}
        </Button>
      </div>
    </BaseModal>
  )
}
