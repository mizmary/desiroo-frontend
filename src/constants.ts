export const API_URL = "http://localhost:4200/api"

export const ROUTS = {
  main: "/",
  auth: "/auth",
  login: "/login",
  profile: "/profile",
  lists: "/lists",
  achievements: "/achievements",
  subscriptions: "/subscriptions"
}

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
