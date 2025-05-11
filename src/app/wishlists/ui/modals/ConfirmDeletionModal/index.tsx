import { MutateOptions } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import styles from "./main.module.scss"
import { TModalBaseProps, TWishlist } from "../../../types"
import { uiText } from "../../../uiText"
import { useSelectedList } from "../../../utils/SelectedListContext"
import { TWishlistItem } from "../../../types"

import { Button } from "@/components/Button"
import { BaseModal } from "@/components/BaseModal"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"

type Props = TModalBaseProps & {
  type: "list" | "element"
  name: string
  onDelete?: () => void
  deleteFn:
    | ((
        variables: string,
        options?: MutateOptions<AxiosResponse<TWishlist>, Error, string>
      ) => void)
    | ((
        variables: { wishlistId: string; itemId: string },
        options?: MutateOptions<
          AxiosResponse<TWishlistItem>,
          Error,
          { wishlistId: string; itemId: string }
        >
      ) => void)
}

export const ConfirmDeletionModal = (props: Props) => {
  const { type, name, isOpen, onClose, deleteFn, onDelete } = props
  const { selectedListId, setSelectedListId } = useSelectedList()
  const { selectedListItemId, setSelectedListItemId } = useSelectedListItem()
  const componentText =
    type === "list" ? uiText.modals.confirmDeletion.list : uiText.modals.confirmDeletion.element

  const handleDelete = () => {
    switch (type) {
      case "list":
        ;(deleteFn as (id: string) => void)(selectedListId)
        setSelectedListId("")
        break
      case "element":
        ;(deleteFn as (params: { wishlistId: string; itemId: string }) => void)({
          wishlistId: selectedListId,
          itemId: selectedListItemId
        })
        setSelectedListItemId("")
        break
    }

    if (onDelete) onDelete()
    onClose()
  }

  if (!isOpen) return null
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="45rem"
    >
      <div className={styles["modal__text"]}>
        <h2 className={styles["modal__text-title"]}>{`${componentText.title} "${name}"?`}</h2>
        <p className={styles["modal__text-description"]}>{`${componentText.description}`}</p>
      </div>

      <div className={styles["modal__actions"]}>
        <Button onClick={handleDelete}>{componentText.actions.delete}</Button>
        <Button
          variant="tertiary"
          type="reset"
          onClick={onClose}
        >
          {componentText.actions.cancel}
        </Button>
      </div>
    </BaseModal>
  )
}
