import { FollowingPerson } from "../types"

import { axiosWithAuth } from "@/api/interceptors"

class FollowService {
  private BASE_URL = "/follow"

  async getFollowing(userId: string) {
    const response = await axiosWithAuth.get<FollowingPerson[]>(
      `${this.BASE_URL}/following/${userId}`
    )
    return response
  }

  async follow(followerId: string, followingId: string) {
    const response = await axiosWithAuth.post(`${this.BASE_URL}`, {
      followerId,
      followingId
    })
    return response
  }

  async unfollow(followerId: string, followingId: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}`, {
      data: {
        followerId,
        followingId
      }
    })
    return response
  }
}

const followService = new FollowService()

export const getFollowing = async (userId: string) => {
  const response = await followService.getFollowing(userId)
  return response.data
}

export const followUser = async ({
  followerId,
  followingId
}: {
  followerId: string
  followingId: string
}) => {
  const response = await followService.follow(followerId, followingId)
  return response.data
}

export const unfollowUser = async ({
  followerId,
  followingId
}: {
  followerId: string
  followingId: string
}) => {
  const response = await followService.unfollow(followerId, followingId)
  return response.data
}
