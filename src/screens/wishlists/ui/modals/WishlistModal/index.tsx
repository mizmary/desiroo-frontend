import { useEffect } from "react"
import styles from "./main.module.scss"
import { useUser } from "@/hooks/useUser"
import { ACCESS_LEVEL } from "../../../constants"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Controller, useForm } from "react-hook-form"
import { RadioGroup } from "@/components/RadioGroup"
import { TWishlistForm } from "../../../wishlist.types"
import { ACCESS_OPTIONS } from "@/screens/wishlists/constants"

type TBaseProps = {
  isOpen: boolean
  onClose: () => void
}

type TCreateProps = {
  type: "create"
  onSubmitForm: (data: TWishlistForm) => void
} & TBaseProps

type TEditProps = {
  type: "edit"
  defaultValues: TWishlistForm
  onSubmitForm: (data: TWishlistForm) => void
} & TBaseProps

type Props = TCreateProps | TEditProps

export const WishlistModal = (props: Props) => {
  const { isOpen, onClose, onSubmitForm, type } = props
  const { user } = useUser()

  const defaultValues =
    type === "edit"
      ? props.defaultValues
      : {
          title: "",
          description: "",
          isGroupList: false,
          accessLevel: ACCESS_LEVEL.public,
          user: user
        }

  const { register, handleSubmit, reset, control } = useForm<TWishlistForm>({
    defaultValues: defaultValues || {
      title: "",
      description: "",
      isGroupList: false,
      accessLevel: ACCESS_LEVEL.public,
      user: user
    }
  })

  useEffect(() => {
    if (isOpen && defaultValues) {
      reset(defaultValues)
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose])

  const onSubmit = (data: TWishlistForm) => {
    console.log(data)
    onSubmitForm(data)
    reset()
    onClose()
  }

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={styles.backdrop}
      onClick={onBackdropClick}
    >
      <div className={styles.modal}>
        <h2 className={styles.modalHeader}>
          {type === "create" ? "Создание вишлиста" : "Редактирование вишлиста"}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.modalForm}
        >
          <label className={styles.formLabel}>
            <Input
              {...register("title", { required: true })}
              label="Название списка"
            />
          </label>
          <label className={styles.formLabel}>
            <Input
              {...register("description")}
              label="Описание"
            />
          </label>
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
                groupLabel="Доступ к списку"
              />
            )}
          />
          <div className={styles.actions}>
            <Button
              variant="tertiary"
              type="reset"
            >
              Отменить
            </Button>
            <Button type="submit">Создать</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
