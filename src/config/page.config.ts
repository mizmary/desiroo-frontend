class PageConfig {
  public readonly home = "/"

  public readonly auth = "/auth"
  public readonly login = "/login"

  public readonly lists = "/lists"
  public readonly profile = "/profile"
  public readonly achievements = "/achievements"
  public readonly subscriptions = "/subscriptions"

  public readonly user = "/user/:userId"
  public readonly userLists = "/user/:userId/lists"
  public readonly userAchievements = "/user/:userId/achievements"
  public readonly userSubscriptions = "/user/:userId/subscriptions"
}

export const pageConfig = new PageConfig()
