import { FormProvider, useForm } from "react-hook-form"

import { IUser, TypeUserForm } from "@/app/auth/types"
import { Tabber } from "@/app/Onboarding/ui/Tabber"
import { TModalBaseProps } from "@/app/wishlists/types"
import { BaseModal } from "@/components/BaseModal"

type Props = {
  user: IUser
} & TModalBaseProps

export const EditProfileModal = (props: Props) => {
  const { isOpen, onClose, user } = props
  const methods = useForm<TypeUserForm>({
    defaultValues: {
      bio: user.bio,
      avatar: user.avatar,
      tags: user.tags,
      shirtSizes: user.shirtSizes,
      shoeSizes: user.shoeSizes,
      ringSizes: user.ringSizes,
      braceletSizes: user.braceletSizes,
      necklaceSizes: user.necklaceSizes
    }
  })

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="50rem"
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormProvider {...methods}>
          <Tabber onSave={onClose} />
        </FormProvider>
      </div>
    </BaseModal>
  )
}
