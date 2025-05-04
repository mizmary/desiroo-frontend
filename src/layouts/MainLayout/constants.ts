import { ROUTS } from "@/constants"

export const SIDEBAR_OPTIONS = [
  {
    title: "Профиль",
    icon: "account_circle",
    route: ROUTS.profile
  },
  {
    title: "Мои списки",
    icon: "stacks",
    route: ROUTS.lists
  },
  {
    title: "Подписки",
    icon: "group",
    route: ROUTS.subscriptions
  },
  {
    title: "Мои достижения",
    icon: "editor_choice",
    route: ROUTS.achievements
  }
]
