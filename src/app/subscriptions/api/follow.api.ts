import { FollowingPerson } from "../types"

import { axiosWithAuth } from "@/api/interceptors"

class FollowService {
  private BASE_URL = "/follow"

  async getFollowing() {
    const response = await axiosWithAuth.get<FollowingPerson[]>(this.BASE_URL)
    return response
  }
}

const followService = new FollowService()

export const getFollowing = async () => {
  const response = await followService.getFollowing()
  return response.data
}
