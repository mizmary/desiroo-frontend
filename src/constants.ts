export const ROUTES_TITLES: Record<string, string> = {
  "/": "Главная",
  "/auth": "Регистрация",
  "/profile": "Профиль",
  "/lists": "Мои списки",
  "/achievements": "Мои достижения",
  "/subscriptions": "Подписки"
}

export const SIDEBAR_OPTIONS = [
  {
    title: "Профиль",
    icon: "account_circle",
    route: "/profile"
  },
  {
    title: "Мои списки",
    icon: "stacks",
    route: "/lists"
  },
  {
    title: "Подписки",
    icon: "group",
    route: "/subscriptions"
  },
  {
    title: "Мои достижения",
    icon: "editor_choice",
    route: "/achievements"
  }
]
