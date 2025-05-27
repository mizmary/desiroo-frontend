import { DetailsSection } from "./DetailsSection"
import { uiText } from "../../../uiText"
import styles from "./main.module.scss"

import { IUser } from "@/app/auth/types"
import {
  clothingSizes,
  shoeSizes,
  ringSizes,
  braceletSizes,
  necklaceLengths
} from "@/__mocks__/sizes"
import { getLabelsByValues } from "@/app/profile/utils/getLabelFromValue"
import { profileTags } from "@/__mocks__/tags"

type Props = {
  user: IUser
}

type field = {
  title: string
  values: string[]
  valueOptions: { label: string; value: string }[]
}

export const UserDetails = (props: Props) => {
  const { user } = props
  const componentText = uiText.details

  const clotheAndShoesFields: field[] = [
    {
      title: componentText.infoSections.clothesAndShoes.clotheField,
      values: user.shirtSizes,
      valueOptions: clothingSizes
    },
    {
      title: componentText.infoSections.clothesAndShoes.shoesField,
      values: user.shoeSizes,
      valueOptions: shoeSizes
    }
  ]
  const jewellersFields: field[] = [
    {
      title: componentText.infoSections.jewellers.ringSizesField,
      values: user.ringSizes,
      valueOptions: ringSizes
    },
    {
      title: componentText.infoSections.jewellers.braceletsSizesField,
      values: user.braceletSizes,
      valueOptions: braceletSizes
    },
    {
      title: componentText.infoSections.jewellers.necklessSizesField,
      values: user.necklaceSizes,
      valueOptions: necklaceLengths
    }
  ]

  return (
    <div className={styles["details"]}>
      <DetailsSection
        title={componentText.infoSections.clothesAndShoes.title}
        fields={clotheAndShoesFields}
      />
      <DetailsSection
        title={componentText.infoSections.jewellers.title}
        fields={jewellersFields}
      />
      <DetailsSection
        title={componentText.infoSections.interests.title}
        tags={getLabelsByValues(profileTags, user.tags).split(",")}
      />
    </div>
  )
}
