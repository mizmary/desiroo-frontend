import { useState } from "react"
import clsx from "clsx"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useFormContext } from "react-hook-form"
import { useNavigate } from "react-router"

import { GeneralInfoTab } from "./Tabs/GeneralInfoTab"
import { ClothesAndShoesTab } from "./Tabs/ClothesAndShoesTab"
import { JewellersTab } from "./Tabs/JewellersTab"
import styles from "./main.module.scss"
import { uiText } from "../../uiText"
import { updateProfile } from "../../api"

import { Button } from "@/components/Button"
import { MUTATION_KEY, QUERY_KEY, ROUTS } from "@/constants"
import { TypeUserForm } from "@/app/auth/types"

const tabs = [
  { key: "general", label: "Общее" },
  { key: "cloth", label: "Одежда и обувь" },
  { key: "jewellers", label: "Украшения" }
] as const

type TabKey = (typeof tabs)[number]["key"]

export const Tabber = ({ onSave }: { onSave?: () => void }) => {
  const [activeTab, setActiveTab] = useState<TabKey>("general")
  const activeIndex = tabs.findIndex((tab) => tab.key === activeTab)
  const componentText = uiText.tabs
  const { watch, handleSubmit } = useFormContext<TypeUserForm>()
  const formData = watch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [MUTATION_KEY.updateProfile],
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.profile]
      })
      toast.success("Данные сохранены!")
      navigate(ROUTS.profile)
    }
  })

  const goToNext = () => {
    if (activeIndex < tabs.length - 1) {
      setActiveTab(tabs[activeIndex + 1].key)
    }
  }

  const goToPrev = () => {
    if (activeIndex > 0) {
      setActiveTab(tabs[activeIndex - 1].key)
    }
  }

  const handleSave = () => {
    mutate(formData)
    if (onSave) onSave()
  }

  return (
    <div className={styles["tabber"]}>
      <div className={styles["tabber__identification"]}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={clsx(
              styles["tabber__identification--item"],
              activeTab === tab.key && styles["tabber__identification--item--active"]
            )}
          />
        ))}
      </div>

      <div className={styles["tabber__main"]}>
        <div className={styles["tabber__main--content"]}>
          {activeTab === "general" && (
            <>
              <span className={styles["tabber__main--content--title"]}>
                {componentText.generalInfo.title}
              </span>
              <GeneralInfoTab />
            </>
          )}
          {activeTab === "cloth" && (
            <>
              <span className={styles["tabber__main--content--title"]}>
                {componentText.clothesAndShoes.title}
              </span>
              <ClothesAndShoesTab />
            </>
          )}
          {activeTab === "jewellers" && (
            <>
              <span className={styles["tabber__main--content--title"]}>
                {componentText.jewellers.title}
              </span>
              <JewellersTab />
            </>
          )}
        </div>

        <div className={styles["tabber__main--actions"]}>
          <Button
            onClick={goToPrev}
            disabled={activeIndex === 0}
          >
            Назад
          </Button>
          {activeIndex === tabs.length - 1 ? (
            <Button onClick={handleSubmit(handleSave)}>Сохранить</Button>
          ) : (
            <Button onClick={goToNext}>Следующий шаг</Button>
          )}
        </div>
      </div>
    </div>
  )
}
