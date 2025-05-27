import { IUser, TypeUserForm } from "../auth/types"

import { axiosWithAuth } from "@/api/interceptors"

export interface IProfileResponse {
  user: IUser
}

class ProfileService {
  private BASE_URL = "/user"

  async updateProfile(data: TypeUserForm) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}`, data)
    return response
  }
  async getProfile() {
    const response = await axiosWithAuth.get<IProfileResponse>(`${this.BASE_URL}`)
    return response
  }
  async getPublicProfile(id: string) {
    const response = await axiosWithAuth.get<IProfileResponse>(`${this.BASE_URL}/${id}`)
    return response
  }
}

const profileService = new ProfileService()

export const updateProfile = async (data: TypeUserForm) => {
  const response = await profileService.updateProfile(data)
  return response.data
}
export const getProfile = async () => {
  const response = await profileService.getProfile()
  return response.data
}
export const getPublicProfile = async (id: string) => {
  const response = await profileService.getPublicProfile(id)
  return response.data
}

class FollowService {
  private BASE_URL = "/follow"

  async isFollowing(followerId: string, followingId: string) {
    const response = await axiosWithAuth.get<boolean>(
      `${this.BASE_URL}/is-following/${followerId}/${followingId}`
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

export const checkIsFollowing = async (followerId: string, followingId: string) => {
  const response = await followService.isFollowing(followerId, followingId)
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
