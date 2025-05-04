export const API_URL = "http://localhost:4200/api"

export const ROUTS = {
  main: "/",
  auth: "/auth",
  login: "/login",
  profile: "/profile",
  lists: "/lists",
  achievements: "/achievements",
  subscriptions: "/subscriptions"
} as const

export const ROUTES_TITLES: Record<string, string> = {
  "/": "Главная",
  "/auth": "Регистрация",
  "/profile": "Профиль",
  "/lists": "Мои списки",
  "/achievements": "Мои достижения",
  "/subscriptions": "Подписки"
} as const

export const QUERY_KEY = {
  auth: "auth",
  wishlists: "wishlists"
} as const
