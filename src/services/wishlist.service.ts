import { axiosWithAuth } from "@/api/interceptors"
import { IWishlistResponse, TypeWishlistFormState } from "@/types/wishlist.types"

class WishlistService {
  private BASE_URL = "/user/wishlists"

  async getWishlists() {
    const response = await axiosWithAuth.get<IWishlistResponse[]>(this.BASE_URL)
    return response
  }

  async createWishlist(data: TypeWishlistFormState) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)
    return response
  }

  async updateWishlist(id: string, data: TypeWishlistFormState) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
    return response
  }

  async deleteWishlist(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
    return response
  }
}

export const wishlistService = new WishlistService()
