export const API_URL = "http://localhost:4200/api"

export const ROUTS = {
  main: "/",
  auth: "/auth",
  login: "/login",
  onboarding: "/onboarding",
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
  profile: "profile",
  publicProfile: "publicProfile",
  isFollowing: "isFollowing",
  wishlist: "wishlist",
  wishlists: "wishlists",
  publicWishlist: "publicWishlist",
  publicWishlists: "publicWishlists",
  wishlistItem: "wishlistItem",
  wishlistItems: "wishlistItems",
  following: "following"
} as const

export const MUTATION_KEY = {
  createWishlist: "createWishlist",
  updateWishlist: "updateWishlist",
  deleteWishlist: "deleteWishlist",

  createWishlistItem: "createWishlistItem",
  updateWishlistItem: "updateWishlistItem",
  deleteWishlistItem: "deleteWishlistItem",

  updateProfile: "updateProfile",

  followUser: "followUser",
  unfollowUser: "unfollowUser"
}
