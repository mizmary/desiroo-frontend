import { TWishlist, TWishlistForm } from "../types"

import { axiosWithAuth } from "@/api/interceptors"

class WishlistService {
  private BASE_URL = "/wishlists"

  async getWishlists() {
    const response = await axiosWithAuth.get<TWishlist[]>(this.BASE_URL)
    return response
  }

  async getWishlist(id: string) {
    const response = await axiosWithAuth.get<TWishlist>(`${this.BASE_URL}/${id}`)
    return response
  }

  async getWishlistsByUserId(userId: string) {
    const response = await axiosWithAuth.get<TWishlist[]>(`${this.BASE_URL}/public/${userId}`)
    return response
  }
  async getWishlistByUserId({ userId, listId }: { userId: string; listId: string }) {
    const response = await axiosWithAuth.get<TWishlist>(
      `${this.BASE_URL}/public/${userId}/${listId}`
    )
    return response
  }

  async createWishlist(data: TWishlistForm) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)
    return response
  }

  async updateWishlist({ id, data }: { id: string; data: TWishlistForm }) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
    return response
  }

  async deleteWishlist(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
    return response
  }
}

const wishlistService = new WishlistService()

export const getWishlists = async () => {
  const response = await wishlistService.getWishlists()
  return response.data
}

export const getWishlistById = async (id: string) => {
  const response = await wishlistService.getWishlist(id)
  return response.data
}

export const getWishlistsByUserId = async (userId: string) => {
  const response = await wishlistService.getWishlistsByUserId(userId)
  return response.data
}

export const getWishlistByUserId = async ({
  userId,
  listId
}: {
  userId: string
  listId: string
}) => {
  const response = await wishlistService.getWishlistByUserId({ userId, listId })
  return response.data
}

export const createWishlist = (data: TWishlistForm) => wishlistService.createWishlist(data)

export const updateWishlist = ({ data, wishlistId }: { data: TWishlistForm; wishlistId: string }) =>
  wishlistService.updateWishlist({ id: wishlistId, data: data })

export const deleteWishlist = (wishlistId: string) => wishlistService.deleteWishlist(wishlistId)
