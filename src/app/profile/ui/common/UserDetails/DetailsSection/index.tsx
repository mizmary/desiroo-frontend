import { DetailsField } from "../DetailsField"
import styles from "./main.module.scss"

import { Tag } from "@/components/Tag"

type field = {
  title: string
  values: string[]
  valueOptions: { label: string; value: string }[]
}

type Props = {
  title: string
  fields?: field[]
  tags?: string[]
}

export const DetailsSection = (props: Props) => {
  const { title, fields, tags } = props
  return (
    <div className={styles["section"]}>
      <span className={styles["section__title"]}>{title}</span>
      {fields && (
        <div className={styles["section__fields"]}>
          {fields.map((field, index) => (
            <DetailsField
              key={`field-${index}`}
              title={field.title}
              values={field.values}
              valueOptions={field.valueOptions}
            />
          ))}
        </div>
      )}
      {tags &&
        (tags.length > 0 ? (
          <div className={styles["section__tags"]}>
            {tags.map((tag, index) => (
              <Tag
                key={`key-${index}`}
                title={tag}
              />
            ))}
          </div>
        ) : (
          "Нет тегов"
        ))}
    </div>
  )
}
