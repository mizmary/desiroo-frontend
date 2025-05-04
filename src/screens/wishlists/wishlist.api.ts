import { TWishlist, TWishlistForm } from "./wishlist.types"
import { axiosWithAuth } from "@/api/interceptors"

class WishlistService {
  private BASE_URL = "/user/wishlists"

  async getWishlists() {
    const response = await axiosWithAuth.get<TWishlist[]>(this.BASE_URL)
    return response
  }

  async createWishlist(data: TWishlistForm) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)
    return response
  }

  async updateWishlist(id: string, data: TWishlistForm) {
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

export const createWishlist = (data: TWishlistForm) => wishlistService.createWishlist(data)

export const deleteWishlist = (wishlistId: string) => wishlistService.deleteWishlist(wishlistId)
