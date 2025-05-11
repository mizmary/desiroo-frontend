import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

import styles from "./main.module.scss"
import { PRICE_RANGE, PRIORITY } from "../../../../constants"

import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"
import { PRICE_RANGE_OPTIONS, PRIORITY_OPTIONS } from "@/app/wishlists/constants"
import { Input } from "@/components/Input"
import { RadioGroup } from "@/components/RadioGroup"
import { Button } from "@/components/Button"
import { TModalBaseProps, TWishlistItemForm } from "@/app/wishlists/types"
import { useSelectedListItem } from "@/app/wishlists/utils/SelectedListItemContext"
import { BaseModal } from "@/components/BaseModal"
import { uiText } from "@/app/wishlists/uiText"

type TCreateProps = {
  type: "create"
  onSubmitForm: (data: TWishlistItemForm, wishlistId: string) => void
}

type TEditProps = {
  type: "edit"
  defaultValues: TWishlistItemForm
  onSubmitForm: (data: TWishlistItemForm, wishlistId: string, itemId: string) => void
}

type Props = TModalBaseProps & (TCreateProps | TEditProps)

export const WishlistItemEditorModal = (props: Props) => {
  const { isOpen, onClose, type, onSubmitForm } = props
  const { selectedListId } = useSelectedList()
  const { selectedListItemId } = useSelectedListItem()
  const modalText = uiText.modals.wishlistItem

  const defaultValues =
    type === "edit"
      ? props.defaultValues
      : {
          wishlist: selectedListId!,
          priceRange: PRICE_RANGE.UpTo1000,
          priority: PRIORITY.low,
          isCompleted: false,
          isReserved: false
        }

  const { register, handleSubmit, reset, control } = useForm<TWishlistItemForm>({
    defaultValues: defaultValues,
    shouldUnregister: true
  })

  useEffect(() => {
    if (isOpen && defaultValues) {
      reset(defaultValues)
    }
  }, [isOpen])

  const onSubmit = (data: TWishlistItemForm) => {
    if (type === "create") {
      onSubmitForm({ ...data, imagesURL: JSON.stringify([]) }, selectedListId)
    } else {
      onSubmitForm({ ...data, imagesURL: JSON.stringify([]) }, selectedListId, selectedListItemId)
    }

    reset()
    onClose()
  }

  const onCancel = () => {
    reset()
    onClose()
  }

  if (!isOpen) return null

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="100rem"
    >
      <h2 className={styles["modal__title"]}>{modalText.title[type]}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles["modal__form"]}
      >
        <Input
          {...register("title", { required: true })}
          label={modalText.form.title}
        />
        <Input
          {...register("description")}
          label={modalText.form.description}
        />
        <Input
          {...register("link")}
          label={modalText.form.link}
        />
        <Controller
          name="priority"
          control={control}
          defaultValue={defaultValues.priority}
          render={({ field }) => (
            <RadioGroup
              groupName={"priority"}
              options={PRIORITY_OPTIONS}
              value={field.value ?? ""}
              onChange={field.onChange}
              groupLabel={modalText.form.priority}
            />
          )}
        />
        <Controller
          name="priceRange"
          control={control}
          defaultValue={defaultValues.priceRange}
          render={({ field }) => (
            <RadioGroup
              groupName={"priceRange"}
              options={PRICE_RANGE_OPTIONS}
              value={field.value ?? ""}
              onChange={field.onChange}
              groupLabel={modalText.form.priceRange}
            />
          )}
        />
        <div className={styles["modal__form-actions"]}>
          <Button
            variant="tertiary"
            type="reset"
            onClick={onCancel}
          >
            {modalText.actions.cancel}
          </Button>
          <Button type="submit">{modalText.actions.action[type]}</Button>
        </div>
      </form>
    </BaseModal>
  )
}
