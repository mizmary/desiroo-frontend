import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

import styles from "./main.module.scss"
import { ACCESS_LEVEL } from "../../../constants"

import { useUser } from "@/hooks/useUser"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { RadioGroup } from "@/components/RadioGroup"
import { ACCESS_OPTIONS } from "@/app/wishlists/constants"
import { TModalBaseProps, TWishlistForm } from "@/app/wishlists/types"
import { useSelectedList } from "@/app/wishlists/utils/SelectedListContext"
import { BaseModal } from "@/components/BaseModal"
import { uiText } from "@/app/wishlists/uiText"

type TCreateProps = {
  type: "create"
  onSubmitForm: (data: TWishlistForm) => void
}

type TEditProps = {
  type: "edit"
  defaultValues: TWishlistForm
  onSubmitForm: (data: TWishlistForm, wishlistId: string) => void
}

type Props = TModalBaseProps & (TCreateProps | TEditProps)
export const WishlistModal = (props: Props) => {
  const { selectedListId } = useSelectedList()
  const { isOpen, onClose, type } = props
  const { user } = useUser()
  const modalText = uiText.modals.wishlist

  const defaultValues =
    type === "edit"
      ? props.defaultValues
      : {
          isGroupList: false,
          accessLevel: ACCESS_LEVEL.public,
          user: user
        }

  const { register, handleSubmit, reset, control } = useForm<TWishlistForm>({
    defaultValues: defaultValues
  })

  useEffect(() => {
    if (isOpen && defaultValues) {
      reset(defaultValues)
    }
  }, [isOpen])

  const onSubmit = (data: TWishlistForm) => {
    if (props.type === "edit") {
      props.onSubmitForm(data, selectedListId)
    } else {
      props.onSubmitForm(data)
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
      maxWidth="50rem"
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

        <Controller
          name="accessLevel"
          control={control}
          defaultValue="PUBLIC"
          render={({ field }) => (
            <RadioGroup
              groupName={"accessLevel"}
              options={ACCESS_OPTIONS}
              value={field.value ?? ""}
              onChange={field.onChange}
              groupLabel={modalText.form.accessLevel}
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
